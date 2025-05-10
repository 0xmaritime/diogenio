# PerspectiveBarrel Component

The PerspectiveBarrel component is a sophisticated line-art barrel visualization serving as the hero section for the DioGenio website. It renders a barrel through clean, architectural-style line drawings showing multiple perspectives, with transitions between views triggered by user interaction.

## Usage

```jsx
import { PerspectiveBarrel } from '../components/sections/PerspectiveBarrel';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  
  return (
    <PerspectiveBarrel 
      quotes={[
        "Perspective is the ultimate luxury",
        "Ancient DAWG energy for those who refuse containment",
        "Diogenes found freedom in constraints. So can you."
      ]}
      nftImages={[
        {src: "/nfts/diogenio-1.png", alt: "DioGenio #1"},
        {src: "/nfts/diogenio-2.png", alt: "DioGenio #2"},
        {src: "/nfts/diogenio-3.png", alt: "DioGenio #3"}
      ]}
      cta={{
        text: "Step inside",
        onClick: () => navigate('/gallery')
      }}
      onPerspectiveChange={(index) => console.log(`Changed to perspective ${index}`)}
    />
  );
}
```

## Props

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| `quotes` | `string[]` | Array of quotes to display in different perspectives | Yes |
| `nftImages` | `{src: string, alt: string}[]` | Array of images to display inside barrel | Yes |
| `cta` | `{text: string, onClick: () => void}` | Call to action button configuration | Yes |
| `className` | `string` | Optional custom CSS class | No |
| `onPerspectiveChange` | `(index: number) => void` | Callback when perspective changes | No |
| `initialPerspective` | `number` | Initial perspective index (0-based) | No |

## Features

1. **Multiple Perspectives**: Shows the barrel from 4 different perspectives with smooth transitions between them
2. **User Interaction**: Transitions between perspectives are triggered by:
   - Scrolling
   - Clicking on perspective indicators
   - Using arrow keys
3. **Responsive**: Adapts to all screen sizes from mobile to desktop
4. **Accessibility**: Fully keyboard navigable and includes proper ARIA attributes
5. **Customizable**: Appearance and content can be customized via props

## Technical Implementation

- Built using React and TypeScript
- SVG-based line art for crisp rendering at all scales
- Smooth CSS transitions between perspectives
- No external dependencies
- Optimized for performance with debounced scroll handling

## Styling

The component uses CSS variables from the main theme:

- `--color-market`: Background color (light beige)
- `--color-wisdom`: Text color (dark)
- `--color-lantern`: CTA button background color (golden)

Additional styles are applied inline using Tailwind CSS classes. 