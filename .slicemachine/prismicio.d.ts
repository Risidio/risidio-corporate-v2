// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for HomeScreen documents */
interface HomeDocumentData {
    /**
     * Slice Zone field in *HomeScreen*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomeDocumentDataSlicesSlice>;
}
/**
 * Slice for *HomeScreen → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = SectionSliceSlice | HeroSliceSlice | Section2Slice;
/**
 * HomeScreen document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * content field in *Page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * link field in *Page*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: page.link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = SectionSliceSlice | HeroSliceSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = HomeDocument | PageDocument;
/**
 * Primary content in HeroSlice → Primary
 *
 */
interface HeroSliceSliceDefaultPrimary {
    /**
     * Title field in *HeroSlice → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: hero_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *HeroSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: hero_slice.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * image field in *HeroSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_slice.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for HeroSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HeroSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *HeroSlice*
 *
 */
type HeroSliceSliceVariation = HeroSliceSliceDefault;
/**
 * HeroSlice Shared Slice
 *
 * - **API ID**: `hero_slice`
 * - **Description**: `HeroSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceSlice = prismicT.SharedSlice<"hero_slice", HeroSliceSliceVariation>;
/**
 * Primary content in Section1 → Primary
 *
 */
interface SectionSliceSliceDefaultPrimary {
    /**
     * Title field in *Section1 → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: section_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Section1 → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: section_slice.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * content field in *Section1 → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: section_slice.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * link field in *Section1 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: section_slice.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Default variation for Section1 Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SectionSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SectionSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SectionSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Section1*
 *
 */
type SectionSliceSliceVariation = SectionSliceSliceDefault;
/**
 * Section1 Shared Slice
 *
 * - **API ID**: `section_slice`
 * - **Description**: `SectionSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SectionSliceSlice = prismicT.SharedSlice<"section_slice", SectionSliceSliceVariation>;
/**
 * Item in Section2 → Items
 *
 */
export interface Section2SliceDefaultItem {
    /**
     * Title field in *Section2 → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: section2.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * description field in *Section2 → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: section2.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * image field in *Section2 → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: section2.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * link field in *Section2 → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: section2.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Default variation for Section2 Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Section2`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type Section2SliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<Section2SliceDefaultItem>>;
/**
 * Slice variation for *Section2*
 *
 */
type Section2SliceVariation = Section2SliceDefault;
/**
 * Section2 Shared Slice
 *
 * - **API ID**: `section2`
 * - **Description**: `Section2`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type Section2Slice = prismicT.SharedSlice<"section2", Section2SliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomeDocumentData, HomeDocumentDataSlicesSlice, HomeDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, HeroSliceSliceDefaultPrimary, HeroSliceSliceDefault, HeroSliceSliceVariation, HeroSliceSlice, SectionSliceSliceDefaultPrimary, SectionSliceSliceDefault, SectionSliceSliceVariation, SectionSliceSlice, Section2SliceDefaultItem, Section2SliceDefault, Section2SliceVariation, Section2Slice };
    }
}
