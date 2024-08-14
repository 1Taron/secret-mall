import React from 'react';
import '../../css/ProductDetail/ProductDetail_info.css';
import PDI_ThumbnailSlider from './PDI_ThumbnailSlider';
import PDI_ThumbnailSlider_Rusk from './Charactor/Rusk/PDI_ThumbnailSlider_Rusk';

const thumbnailSliders = {
    default: PDI_ThumbnailSlider,
    Rusk: PDI_ThumbnailSlider_Rusk,
};

export default function ProductDetail_info({ productId }) {
    const sliderKey = productId ? productId : 'default';
    const ThumbnailSlider = thumbnailSliders[sliderKey] || thumbnailSliders.default;

    return (
        <>
            <div className="pdi_infoContainer">
                <ThumbnailSlider />
                <div className="pdi_infobox">
                    <h4>……………………………………………………………………………………………… </h4>
                    <br />
                    <h4> ◆Click here to try on sample avatars ◆ </h4>
                    <br />
                    <p> -Avatar Museum 5-</p>
                    <p> https://vrchat.com/home/world/wrld_4961beb0-a1c3-4043-b4db-bf57801e1ec8 </p>
                    <br />
                    <h4> ◆Official Costume SHOP◆</h4>
                    <br />
                    <p>https://sugary-boutique.booth.pm/ </p>
                    <br />
                    <h4>………………………………………………………………………………………………</h4>
                    <p>
                        This model is an original model called "Karin" that is compatible with Unity's Humanoid format.
                        This model is intended to be usedprimarily in VRChat. It can be used for both commercial and
                        non-commercial purposes.{' '}
                    </p>
                    <br />
                    <h2>◆Notes◆ </h2>
                    <br />
                    <p>
                        ■Anycontent other than the basic model specifications (how to convert to VRM, how to upload,
                        etc.) is outside the scope of support.{' '}
                    </p>
                    <br />
                    <p>
                        ■Please note that we may not be able to respond to inquiries made in languages ​​other than
                        Japanese.{' '}
                    </p>
                    <br />
                    <p>■Due to the nature of DL products, they cannot be returned orrefunded. </p>
                    <br />
                    <p>
                        ■These products are sold only at Booth, and all other stores selling these products are illegal.
                        If we confirm that you are selling or purchasing these products at other stores, we will report
                        you as soon as possible.{' '}
                    </p>
                    <br />
                    <p> import the following two items in advance before importing the unitypackage file.</p>
                    <p>・liltoon 【　https://lilxyzw.booth.pm/items/3087170　】 </p>
                    <p>・VRCSDK avatar3.0</p>
                    <br />
                    <p>Set up with Unity 2019.4.31f1. We cannot guarantee operation with other programs. </p>
                    <br />
                    <p>*Please read and agree to the terms of use below before purchasing. </p>
                    <br />
                    <br />

                    <h2>◆Model information◆</h2>
                    <br />
                    <p>SDK3.0: Supported PhysBone: Supported </p>
                    <p>Eye tracking: Supported </p>
                    <p>Full body tracking: Supported </p>
                    <p>Lip sync: Supported </p>
                    <p>Base body: Yes</p>
                    <br />
                    <p>■Model specifications </p>
                    <br />
                    <p> Number of polygons: △46414 </p>
                    <br />
                    <p>
                        Shape key: For facial expression creation 145
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Base
                        body (for dressing) 23
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Other
                        (hair, animal ears, etc.) 30
                        <br />{' '}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMD
                        compatible 43{' '}
                    </p>
                    <br />
                    <p>Mesh: 10</p>
                    <br />
                    <p>Material: 6 </p>
                    <br />
                    <p>Texture: 6 (Mask 9) </p>
                    <br />
                    <p> Shader used: liltoon https://lilxyzw.booth.pm/items/3087170</p>
                    <br />
                    <br />

                    <h2>◆Included data◆</h2>
                    <br />
                    <p>・Model data.fbx (with extra fbx for Blender modification) </p>
                    <p>・Texture.png ・Texture modificationdata.psd </p>
                    <p>・Texture modification data.clip </p>
                    <p>・Unitypackage </p>
                    <br />
                    <br />

                    <h2>◆Terms of Use◆ </h2>
                    <br />
                    <p>
                        These terms and conditions use the VN3 License ( https://www.vn3.org/ ) template created by
                        Hiroko Ashiyama (@hiorko_TB) .
                    </p>
                    <br />
                    <p>
                        Terms of Use (JP)
                        https://drive.google.com/file/d/14c0X2qmzlG2tz9xXFgCkVGBEVSdmPMIS/view?usp=sharing
                    </p>
                    <br />
                    <p>
                        Terms of use (EN)
                        https://drive.google.com/file/d/1WzWx-gw3I1KKIALZnIWY9dh6IDKSzK6l/view?usp=sharing
                    </p>
                    <br />
                    <p>
                        이용규약 (KO) https://drive.google.com/file/d/1-uq36USgrj7iw9rHwTuW1R0rGFoRTXYV/view?usp=sharing
                    </p>
                    <br />
                    <p>
                        Terms of Use (ZH)
                        https://drive.google.com/file/d/1YsQQGaNY2ED8hZGafp6WDybPUkkaF-JY/view?usp=sharingBy
                    </p>
                    <br />
                    <p>
                        using this model, you are deemed to have agreed to these terms of use. Please be sure to check
                        before purchasing.{' '}
                    </p>
                    <p>
                        In addition, in the event of any discrepancies with other languages, the Japanese version of the
                        Terms of Use will apply.{' '}
                    </p>
                    <br />
                    <br />

                    <h2>◆Contact information◆ </h2>
                    <br />
                    <p>
                        If you have any other questions or problems, please contact us via message on BOOTH or the
                        following: Twitter: @komado_booth https://twitter.com/komado_booth
                    </p>
                    <br />
                    <br />

                    <h2>◆Update history◆ </h2>
                    <br />
                    <p>2022/1/1 ver1.00 released </p>
                    <br />
                    <p>2022/1/5 </p>
                    <p> ・Updated to Sunao Shader1.5.2 </p>
                    <p>・Turned on the "Write Defaults" item in "Karin_FX" in the Animation controller</p>
                    <br />
                    <p>2022/5/2 ver1.1 released </p>
                    <p>・Supports PhysBone </p>
                    <p>・Added "cheek bone" </p>
                    <p>・Added a material that makes the bangs transparent </p>
                    <p>・Edited and corrected the body texture and PSD </p>
                    <p>・Unified the shader to liltoon</p>
                    <p>・Modified bones and weights </p>
                    <p>・Edited and added mask texture </p>
                    <p>・Added a shape key to make the breastsbigger to "underwear" </p>
                    <p>・Other minor corrections *Overwriting is not recommended </p>
                    <br />
                    <p>2022/5/28 ver1.11released</p>
                    <p>・Adjusted cheek bones </p>
                    <p>・Modified the rotation of some bones </p>
                    <p>・Adjusted PB ・Adjustedmaterial settings </p>
                    <p>・Changed to import under the "Amatousagoi" folder when importing UnityPackage</p>
                    <p>・Other minor corrections *Overwriting is not recommended </p>
                    <br />
                    <p>2022/6/2</p>
                    <p>・Fixed the shoe bone of"Karin_kisekae" prefab </p>
                    <p>・Added Korean and Chinese to the Terms of Use </p>
                    <br />
                    <p>2023/3/31 </p>
                    <p>
                        Fixed a bug that caused the mesh of body_2 to break in Unity2021 When updating, please take a
                        backup if necessary and proceed at your own risk.
                    </p>
                    <br />
                    <p>Updates are optional.</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </>
    );
}
