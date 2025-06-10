import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ImageLazyProps {
  src: string;
  alt: string;
  className: string;
}
export const ImageLazy = ({ src, alt, className }: ImageLazyProps) => (
  <LazyLoadImage
    className={className}
    alt={alt}
    effect="black-and-white"
    src={src}
    width={"auto"}
    height={500}
  />
);
