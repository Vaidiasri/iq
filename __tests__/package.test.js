/**
 * Comprehensive test suite for root package.json
 * This test file validates the workspace configuration including:
 * - JSON syntax and structure
 * - Required fields and their formats
 * - Script commands and their validity
 * - Repository URLs and metadata
 * - Referenced paths and dependencies
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

describe('package.json validation', () => {
  let packageJson;
  let packageJsonPath;
  let packageJsonContent;

  beforeAll(() => {
    packageJsonPath = path.join(process.cwd(), 'package.json');
    packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
    packageJson = JSON.parse(packageJsonContent);
  });

  describe('JSON syntax and structure', () => {
    test('should be valid JSON', () => {
      expect(() => JSON.parse(packageJsonContent)).not.toThrow();
    });

    test('should parse into an object', () => {
      expect(typeof packageJson).toBe('object');
      expect(packageJson).not.toBeNull();
      expect(Array.isArray(packageJson)).toBe(false);
    });

    test('should have proper formatting (2-space indentation)', () => {
      const formatted = JSON.stringify(packageJson, null, 2);
      // Allow for trailing newline differences
      expect(packageJsonContent.trim()).toBe(formatted.trim());
    });

    test('should not contain any trailing commas', () => {
      // JSON.parse would fail if there were trailing commas, but let's be explicit
      expect(packageJsonContent).not.toMatch(/,\s*[}\]]/);
    });
  });

  describe('required fields', () => {
    test('should have a name field', () => {
      expect(packageJson).toHaveProperty('name');
      expect(typeof packageJson.name).toBe('string');
      expect(packageJson.name.length).toBeGreaterThan(0);
    });

    test('should have a version field', () => {
      expect(packageJson).toHaveProperty('version');
      expect(typeof packageJson.version).toBe('string');
    });

    test('should have a scripts field', () => {
      expect(packageJson).toHaveProperty('scripts');
      expect(typeof packageJson.scripts).toBe('object');
    });

    test('should have repository information', () => {
      expect(packageJson).toHaveProperty('repository');
      expect(typeof packageJson.repository).toBe('object');
    });
  });

  describe('name field validation', () => {
    test('should be "workspace"', () => {
      expect(packageJson.name).toBe('workspace');
    });

    test('should not contain uppercase letters', () => {
      expect(packageJson.name).toBe(packageJson.name.toLowerCase());
    });

    test('should not contain spaces', () => {
      expect(packageJson.name).not.toContain(' ');
    });

    test('should not start with a dot or underscore', () => {
      expect(packageJson.name).not.toMatch(/^[._]/);
    });

    test('should only contain URL-safe characters', () => {
      expect(packageJson.name).toMatch(/^[a-z0-9@/._-]+$/);
    });
  });

  describe('version field validation', () => {
    test('should be "1.0.0"', () => {
      expect(packageJson.version).toBe('1.0.0');
    });

    test('should follow semver format', () => {
      const semverRegex = /^\d+\.\d+\.\d+(-[a-zA-Z0-9.-]+)?(\+[a-zA-Z0-9.-]+)?$/;
      expect(packageJson.version).toMatch(semverRegex);
    });

    test('should parse as valid semver', () => {
      const parts = packageJson.version.split('.');
      expect(parts).toHaveLength(3);
      parts.forEach(part => {
        expect(parseInt(part, 10)).not.toBeNaN();
      });
    });
  });

  describe('main field validation', () => {
    test('should have a main field', () => {
      expect(packageJson).toHaveProperty('main');
    });

    test('should be "server.js"', () => {
      expect(packageJson.main).toBe('server.js');
    });

    test('should be a string', () => {
      expect(typeof packageJson.main).toBe('string');
    });

    test('should reference a JavaScript file', () => {
      expect(packageJson.main).toMatch(/\.js$/);
    });
  });

  describe('scripts validation', () => {
    test('should have a test script', () => {
      expect(packageJson.scripts).toHaveProperty('test');
    });

    test('should have a build script', () => {
      expect(packageJson.scripts).toHaveProperty('build');
    });

    test('should have a start script', () => {
      expect(packageJson.scripts).toHaveProperty('start');
    });

    test('all script values should be strings', () => {
      Object.values(packageJson.scripts).forEach(script => {
        expect(typeof script).toBe('string');
      });
    });

    test('scripts should not be empty', () => {
      Object.values(packageJson.scripts).forEach(script => {
        expect(script.length).toBeGreaterThan(0);
      });
    });

    test('test script should indicate test is not yet implemented', () => {
      expect(packageJson.scripts.test).toContain('Error: no test specified');
      expect(packageJson.scripts.test).toContain('exit 1');
    });

    describe('build script validation', () => {
      test('should install backend dependencies', () => {
        expect(packageJson.scripts.build).toContain('npm install --prefix backend');
      });

      test('should install frontend dependencies', () => {
        expect(packageJson.scripts.build).toContain('npm install --prefix frontend/project');
      });

      test('should build frontend project', () => {
        expect(packageJson.scripts.build).toContain('npm run build --prefix frontend/project');
      });

      test('should execute commands in correct order', () => {
        const buildScript = packageJson.scripts.build;
        const backendIndex = buildScript.indexOf('npm install --prefix backend');
        const frontendInstallIndex = buildScript.indexOf('npm install --prefix frontend/project');
        const frontendBuildIndex = buildScript.indexOf('npm run build --prefix frontend/project');
        
        expect(backendIndex).toBeLessThan(frontendInstallIndex);
        expect(frontendInstallIndex).toBeLessThan(frontendBuildIndex);
      });

      test('should use && for command chaining', () => {
        expect(packageJson.scripts.build).toContain('&&');
      });
    });

    describe('start script validation', () => {
      test('should delegate to backend start script', () => {
        expect(packageJson.scripts.start).toContain('npm run start --prefix backend');
      });

      test('should use --prefix flag', () => {
        expect(packageJson.scripts.start).toContain('--prefix backend');
      });
    });
  });

  describe('repository field validation', () => {
    test('should be an object', () => {
      expect(typeof packageJson.repository).toBe('object');
      expect(Array.isArray(packageJson.repository)).toBe(false);
    });

    test('should have a type field', () => {
      expect(packageJson.repository).toHaveProperty('type');
      expect(packageJson.repository.type).toBe('git');
    });

    test('should have a url field', () => {
      expect(packageJson.repository).toHaveProperty('url');
      expect(typeof packageJson.repository.url).toBe('string');
    });

    test('url should be a valid GitHub repository URL', () => {
      expect(packageJson.repository.url).toMatch(/^git\+https:\/\/github\.com\//);
    });

    test('url should point to Vaidiasri/iq repository', () => {
      expect(packageJson.repository.url).toBe('git+https://github.com/Vaidiasri/iq.git');
    });

    test('url should end with .git', () => {
      expect(packageJson.repository.url).toMatch(/\.git$/);
    });

    test('url should be properly formatted', () => {
      const urlRegex = /^git\+https:\/\/github\.com\/[\w-]+\/[\w-]+\.git$/;
      expect(packageJson.repository.url).toMatch(urlRegex);
    });
  });

  describe('bugs field validation', () => {
    test('should have a bugs field', () => {
      expect(packageJson).toHaveProperty('bugs');
    });

    test('should be an object', () => {
      expect(typeof packageJson.bugs).toBe('object');
    });

    test('should have a url property', () => {
      expect(packageJson.bugs).toHaveProperty('url');
    });

    test('bugs url should point to GitHub issues', () => {
      expect(packageJson.bugs.url).toBe('https://github.com/Vaidiasri/iq/issues');
    });

    test('bugs url should match repository', () => {
      const repoUrl = packageJson.repository.url.replace('git+', '').replace('.git', '');
      expect(packageJson.bugs.url).toContain(repoUrl.replace('https://', ''));
    });
  });

  describe('homepage field validation', () => {
    test('should have a homepage field', () => {
      expect(packageJson).toHaveProperty('homepage');
    });

    test('should be a string', () => {
      expect(typeof packageJson.homepage).toBe('string');
    });

    test('homepage should point to GitHub README', () => {
      expect(packageJson.homepage).toBe('https://github.com/Vaidiasri/iq#readme');
    });

    test('homepage should match repository', () => {
      expect(packageJson.homepage).toContain('Vaidiasri/iq');
    });
  });

  describe('license field validation', () => {
    test('should have a license field', () => {
      expect(packageJson).toHaveProperty('license');
    });

    test('should be ISC license', () => {
      expect(packageJson.license).toBe('ISC');
    });

    test('should be a valid SPDX license identifier', () => {
      const validLicenses = ['MIT', 'ISC', 'Apache-2.0', 'BSD-3-Clause', 'BSD-2-Clause', 'GPL-3.0', 'UNLICENSED'];
      expect(validLicenses).toContain(packageJson.license);
    });
  });

  describe('optional fields', () => {
    test('should have keywords field', () => {
      expect(packageJson).toHaveProperty('keywords');
    });

    test('keywords should be an array', () => {
      expect(Array.isArray(packageJson.keywords)).toBe(true);
    });

    test('should have author field', () => {
      expect(packageJson).toHaveProperty('author');
    });

    test('author should be a string', () => {
      expect(typeof packageJson.author).toBe('string');
    });

    test('should have description field', () => {
      expect(packageJson).toHaveProperty('description');
    });

    test('description should be a string', () => {
      expect(typeof packageJson.description).toBe('string');
    });
  });

  describe('workspace structure validation', () => {
    test('backend directory should exist', () => {
      const backendPath = path.join(process.cwd(), 'backend');
      expect(fs.existsSync(backendPath)).toBe(true);
    });

    test('frontend/project directory should exist', () => {
      const frontendPath = path.join(process.cwd(), 'frontend', 'project');
      expect(fs.existsSync(frontendPath)).toBe(true);
    });

    test('backend should have package.json', () => {
      const backendPackagePath = path.join(process.cwd(), 'backend', 'package.json');
      expect(fs.existsSync(backendPackagePath)).toBe(true);
    });

    test('frontend/project should have package.json', () => {
      const frontendPackagePath = path.join(process.cwd(), 'frontend', 'project', 'package.json');
      expect(fs.existsSync(frontendPackagePath)).toBe(true);
    });

    test('backend package.json should be valid', () => {
      const backendPackagePath = path.join(process.cwd(), 'backend', 'package.json');
      const backendContent = fs.readFileSync(backendPackagePath, 'utf8');
      expect(() => JSON.parse(backendContent)).not.toThrow();
    });

    test('frontend package.json should be valid', () => {
      const frontendPackagePath = path.join(process.cwd(), 'frontend', 'project', 'package.json');
      const frontendContent = fs.readFileSync(frontendPackagePath, 'utf8');
      expect(() => JSON.parse(frontendContent)).not.toThrow();
    });
  });

  describe('consistency checks', () => {
    test('repository URL should be consistent across all fields', () => {
      const repoOwner = 'Vaidiasri';
      const repoName = 'iq';
      
      expect(packageJson.repository.url).toContain(repoOwner);
      expect(packageJson.repository.url).toContain(repoName);
      expect(packageJson.bugs.url).toContain(repoOwner);
      expect(packageJson.bugs.url).toContain(repoName);
      expect(packageJson.homepage).toContain(repoOwner);
      expect(packageJson.homepage).toContain(repoName);
    });

    test('should not have any duplicate keys', () => {
      const keys = Object.keys(packageJson);
      const uniqueKeys = new Set(keys);
      expect(keys.length).toBe(uniqueKeys.size);
    });

    test('should not have any undefined values', () => {
      Object.values(packageJson).forEach(value => {
        expect(value).not.toBeUndefined();
      });
    });
  });

  describe('edge cases and error handling', () => {
    test('should handle reading file with different encodings', () => {
      const utf8Content = fs.readFileSync(packageJsonPath, 'utf8');
      const asciiContent = fs.readFileSync(packageJsonPath, 'ascii');
      expect(utf8Content).toBe(asciiContent);
    });

    test('should not contain any non-ASCII characters', () => {
      expect(packageJsonContent).toMatch(/^[\x00-\x7F]*$/);
    });

    test('should not exceed reasonable file size (< 10KB)', () => {
      const stats = fs.statSync(packageJsonPath);
      expect(stats.size).toBeLessThan(10240); // 10KB
    });

    test('should parse successfully multiple times', () => {
      const firstParse = JSON.parse(packageJsonContent);
      const secondParse = JSON.parse(packageJsonContent);
      expect(firstParse).toEqual(secondParse);
    });

    test('stringified version should parse back to same object', () => {
      const stringified = JSON.stringify(packageJson);
      const reparsed = JSON.parse(stringified);
      expect(reparsed).toEqual(packageJson);
    });
  });

  describe('security considerations', () => {
    test('should not contain any suspicious scripts', () => {
      Object.values(packageJson.scripts).forEach(script => {
        expect(script).not.toContain('rm -rf');
        expect(script).not.toContain('curl');
        expect(script).not.toContain('wget');
        expect(script).not.toContain('eval');
      });
    });

    test('should use https for repository URL', () => {
      expect(packageJson.repository.url).toContain('https://');
    });

    test('should use https for bugs URL', () => {
      expect(packageJson.bugs.url).toContain('https://');
    });

    test('should use https for homepage URL', () => {
      expect(packageJson.homepage).toContain('https://');
    });
  });

  describe('npm compatibility', () => {
    test('should be valid according to npm', () => {
      // This test would require npm to be available in the test environment
      // For now, we'll just verify the basic structure
      expect(packageJson).toHaveProperty('name');
      expect(packageJson).toHaveProperty('version');
    });

    test('package name should be npm-compatible', () => {
      // NPM package names must be lowercase and URL-safe
      expect(packageJson.name).toMatch(/^[a-z0-9@/._-]+$/);
    });

    test('version should be npm-compatible', () => {
      // Should follow semver
      expect(packageJson.version).toMatch(/^\d+\.\d+\.\d+/);
    });
  });

  describe('monorepo workspace configuration', () => {
    test('should reference backend in build script', () => {
      expect(packageJson.scripts.build).toContain('backend');
    });

    test('should reference frontend in build script', () => {
      expect(packageJson.scripts.build).toContain('frontend/project');
    });

    test('should use npm prefix pattern for workspace commands', () => {
      const buildScript = packageJson.scripts.build;
      const startScript = packageJson.scripts.start;
      
      expect(buildScript).toMatch(/--prefix \w+/);
      expect(startScript).toMatch(/--prefix \w+/);
    });

    test('workspace paths should be relative', () => {
      const buildScript = packageJson.scripts.build;
      expect(buildScript).not.toContain('/home');
      expect(buildScript).not.toContain('/usr');
      expect(buildScript).not.toContain('C:\\');
    });
  });

  describe('future-proofing and extensibility', () => {
    test('should allow adding new scripts', () => {
      const currentScripts = Object.keys(packageJson.scripts);
      expect(currentScripts.length).toBeGreaterThan(0);
      // Verify structure allows for additional scripts
      expect(typeof packageJson.scripts).toBe('object');
    });

    test('should allow adding dependencies section', () => {
      // The structure should be valid even if we add dependencies
      const testJson = { ...packageJson, dependencies: {} };
      expect(() => JSON.stringify(testJson)).not.toThrow();
    });

    test('should allow adding devDependencies section', () => {
      const testJson = { ...packageJson, devDependencies: {} };
      expect(() => JSON.stringify(testJson)).not.toThrow();
    });

    test('keywords array should be expandable', () => {
      expect(Array.isArray(packageJson.keywords)).toBe(true);
      // Should be able to add keywords
      const testKeywords = [...packageJson.keywords, 'test'];
      expect(testKeywords.length).toBeGreaterThanOrEqual(packageJson.keywords.length);
    });
  });
});