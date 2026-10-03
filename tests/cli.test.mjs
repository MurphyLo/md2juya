import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const cli = fileURLToPath(new URL('../dist/cli.js', import.meta.url));
const input = fileURLToPath(new URL('./fixtures/elements.md', import.meta.url));
const run = args => spawnSync(process.execPath, [cli, ...args], { encoding: 'utf8' });

test('--theme without a value fails instead of falling back to juya', () => {
  const dir = mkdtempSync(join(tmpdir(), 'md2juya-cli-'));
  for (const flag of [['--theme'], ['--theme=']]) {
    const output = join(dir, 'out.html');
    const result = run([input, output, ...flag]);
    assert.equal(result.status, 1, flag.join(' '));
    assert.match(result.stderr, /--theme 缺少主题名/);
    assert.ok(!existsSync(output), flag.join(' '));
  }
});

test('--theme selects a theme and unknown names fail', () => {
  const dir = mkdtempSync(join(tmpdir(), 'md2juya-cli-'));
  assert.equal(run([input, join(dir, 'a.html'), '--theme', 'porcelain']).status, 0);
  assert.equal(run([input, join(dir, 'b.html'), '--theme=porcelain']).status, 0);
  const unknown = run([input, join(dir, 'c.html'), '--theme', 'nope']);
  assert.equal(unknown.status, 1);
  assert.match(unknown.stderr, /未知主题 "nope"/);
});
