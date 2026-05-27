import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  if (!source) {
    return null;
  }

  return builder.image(source);
}

export function imageSource(image, fallbackImage) {
  if (image?.asset?.url) {
    return image.asset.url;
  }

  if (image?.asset) {
    return urlFor(image).width(1600).height(1000).fit("crop").auto("format").url();
  }

  return image?.src || fallbackImage?.src || "";
}

export function imageAlt(image, fallbackAlt = "") {
  return image?.alt || fallbackAlt;
}
