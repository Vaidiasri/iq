import {Inngest} from 'inngest'
import { connectDB } from './db.js'
import User from '../models/User.js'
import { upsertStreamUser, deleteStreamUser } from './stream.js'


export const inngest=new Inngest({id:"talent-iq"});
const syncUser = inngest.createFunction(
  { id: "sync-user" },
  [{ event: "clerk/user.created" }, { event: "clerk/user.updated" }],
  async ({ event }) => {
    await connectDB();
    const { id, email_addresses, first_name, last_name, image_url } = event.data;
    const userData = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`,
      profileImage: image_url,
    };
    const newUser = await User.findOneAndUpdate({ clerkId: id }, userData, {
      upsert: true,
      new: true,
    });

    await upsertStreamUser({
      id: newUser.clerkId.toString(),
      name: newUser.name,
      image: newUser.profileImage,
    });
    // send a welcome  email here later
    
  }
);
const deleteUserFromDB=inngest.createFunction(
    {id:"delete-user-from-db"},
    {event:"clerk/user.deleted"},
    async({event})=>{
        await connectDB()
        const{id}=event.data
       await User.deleteOne({clerkId:id})
       await deleteStreamUser(id.toString())
    }
)
export  const functions=[syncUser,deleteUserFromDB]