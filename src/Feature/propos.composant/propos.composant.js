import React from 'react';
import "./css/propos.composant.css"
import imgBannerPropos from "../../Shared/assets/banner_propos.png"
import Banner from '../../Layout/banner.layout/banner.layout';
import Onglet from '../../Layout/onglet.layout/onglet.layout';

function ProposComponent() {
  return (
    <div className='propos_container'>
      <Banner backgroundImage={imgBannerPropos}/>
      <div className='onglet_container'>
        <Onglet title="Fiabilité" content="
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada odio sed maximus imperdiet. Nullam ut magna maximus, pretium lorem id, imperdiet mauris. Ut cursus, dolor id scelerisque aliquet, metus massa porta augue, tincidunt cursus ligula eros eget diam. Vivamus ullamcorper lacinia elit, non eleifend erat iaculis id. Sed vitae augue vitae felis sodales mattis eu id risus. Ut placerat dui risus, imperdiet dapibus urna scelerisque eu. Duis aliquet metus sit amet dui ullamcorper condimentum. Suspendisse tristique interdum nisl quis volutpat. Maecenas aliquet et massa non tempus. Maecenas eget tortor eleifend, egestas orci eget, iaculis nisi. Curabitur ultricies placerat elit." />
        <Onglet title="Respect" content="
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada odio sed maximus imperdiet. Nullam ut magna maximus, pretium lorem id, imperdiet mauris. Ut cursus, dolor id scelerisque aliquet, metus massa porta augue, tincidunt cursus ligula eros eget diam. Vivamus ullamcorper lacinia elit, non eleifend erat iaculis id. Sed vitae augue vitae felis sodales mattis eu id risus. Ut placerat dui risus, imperdiet dapibus urna scelerisque eu. Duis aliquet metus sit amet dui ullamcorper condimentum. Suspendisse tristique interdum nisl quis volutpat. Maecenas aliquet et massa non tempus. Maecenas eget tortor eleifend, egestas orci eget, iaculis nisi. Curabitur ultricies placerat elit." />
        <Onglet title="Service" content="
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada odio sed maximus imperdiet. Nullam ut magna maximus, pretium lorem id, imperdiet mauris. Ut cursus, dolor id scelerisque aliquet, metus massa porta augue, tincidunt cursus ligula eros eget diam. Vivamus ullamcorper lacinia elit, non eleifend erat iaculis id. Sed vitae augue vitae felis sodales mattis eu id risus. Ut placerat dui risus, imperdiet dapibus urna scelerisque eu. Duis aliquet metus sit amet dui ullamcorper condimentum. Suspendisse tristique interdum nisl quis volutpat. Maecenas aliquet et massa non tempus. Maecenas eget tortor eleifend, egestas orci eget, iaculis nisi. Curabitur ultricies placerat elit." />
        <Onglet title="Sécurité" content="
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada odio sed maximus imperdiet. Nullam ut magna maximus, pretium lorem id, imperdiet mauris. Ut cursus, dolor id scelerisque aliquet, metus massa porta augue, tincidunt cursus ligula eros eget diam. Vivamus ullamcorper lacinia elit, non eleifend erat iaculis id. Sed vitae augue vitae felis sodales mattis eu id risus. Ut placerat dui risus, imperdiet dapibus urna scelerisque eu. Duis aliquet metus sit amet dui ullamcorper condimentum. Suspendisse tristique interdum nisl quis volutpat. Maecenas aliquet et massa non tempus. Maecenas eget tortor eleifend, egestas orci eget, iaculis nisi. Curabitur ultricies placerat elit." />
      </div>  
    </div>
  );
}

export default ProposComponent;