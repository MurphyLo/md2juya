import { enji } from '../../dist/index.js';

const variant = (name, base, colors) => ({
  ...base,
  name,
  color: { ...base.color, ...colors }
});

// NIPPON COLORS：長春 #BF6766、燕脂 #9F353A、蘇芳 #8E354A。
// 長春与蘇芳只用于并排视觉比较，确认方向后再决定是否正式注册。
export const nipponSamples = [
  variant('nippon-choshun', enji, {
    pageBg: '#fff9f8',
    text: '#3f2d2e', body: '#3f2d2e', strong: '#5c2d31',
    accent: '#9f353a', headingText: '#4b252a', h2Bg: '#bf6766', h2Rule: '#9f353a',
    card: '#f7eceb', rowAlt: '#f1e1e0', border: '#d8b8b8', borderSoft: '#e4cdcd',
    codeText: '#74353a', codeBg: '#f0dedd', sectionText: '#744047',
    sectionRule: '#d8b8b8', hr: '#bd8b8e', preText: '#442b2d', preBg: '#f7eceb'
  }),
  variant('nippon-suoh', enji, {
    pageBg: '#fbf6f6',
    text: '#39282b', body: '#39282b', strong: '#51232d',
    accent: '#7d2d40', headingText: '#fff8f7', h2Bg: '#8e354a', h2Rule: '#7d2d40',
    card: '#eee0e2', rowAlt: '#e5d3d7', border: '#c8a5ad', borderSoft: '#d9bec4',
    codeText: '#662b3a', codeBg: '#e8d5da', sectionText: '#67313f',
    sectionRule: '#c8a5ad', hr: '#ae7c88', preText: '#3e292e', preBg: '#eee0e2'
  })
];
