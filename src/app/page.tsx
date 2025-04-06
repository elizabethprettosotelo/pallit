import { RandomSerifFontButton } from './fonts';
import { RandomSansSerifFontButton } from './fonts';

// test

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <RandomSansSerifFontButton />
      <RandomSerifFontButton />
    </div>
  );
}