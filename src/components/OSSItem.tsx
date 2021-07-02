import 'twin.macro';
import Emoji from 'a11y-react-emoji';

interface OSSItemProps {
  href: string;
  symbol: string;
  label: string;
  title: string;
  description: string;
}

function OSSItem({ href, symbol, label, title, description }: OSSItemProps) {
  return (
    <div>
      <Emoji symbol={symbol} role="img" aria-label={label} tw="mr-2" />
      <a
        tw="text-blue-600 text-lg"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <p>{description}</p>
    </div>
  );
}

export default OSSItem;
