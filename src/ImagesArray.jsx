let carArray = [
    "https://www.cnet.com/a/img/resize/5ca9b95091f974b873805bdcb54bd11eb52cf19e/hub/2022/03/17/2ba45e68-4d5b-4370-9306-eea370e3084b/enclave-ogi.jpg?auto=webp&fit=crop&height=900&width=1200",
    "https://i.gaw.to/content/photos/43/91/439174-mini-nerenouvellerait-pas-sa-cooper-cabriolet.jpeg",
    "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:eco,w_1200/v1/cms/uploads/m2ahc1pzcdc8gbsrnsdt",
    "https://weudealerimagesprd.blob.core.windows.net/me18/product/file/23MY_IMG_EXT_CD542_TAU_RGE_AJNFB07636GL64655.jpg",
    "https://beta.ctvnews.ca/local/windsor/2020/1/30/1_4790203/_jcr_content/root/responsivegrid/image.coreimg.jpeg/1580398347089/1-4790222.jpeg",
    "https://media.ed.edmundsmedia.com/gmc/sierra-1500-limited/2022/oem/2022_gmc_sierra-1500-limited_crew-cabpickup_at4_fq_oem_1_600.jpg",
    "https://media.ed.edmunds-media.com/gmc/canyon/2017/oem/2017_gmc_canyon_crew-cab-pickup_denali_fq_oem_1_600.jpg",
    "https://i0.wp.com/practicalmotoring.com.au/wp-content/uploads/2021/05/2021-Subaru-Outback-AWD-Sport-669938.jpg?resize=1200%2C560&ssl=1",
    "https://images.cars.com/cldstatic/wp-content/uploads/mitsubishioutlander-phev-2023-exterior-front-angle-oem-scaled.jpg",
    "https://www.edmunds.com/assets/m/dodge/ram-wagon/1998/oem/1998_dodge_ram-wagon_passenger-van_1500_fq_oem_1_500.jpg",
    "https://www.saratogian.com/wp-content/uploads/2022/01/Nissan-Pathfinder-01.jpg?w=525",
    "https://media.ed.edmunds-media.com/honda/civic/2018/oem/2018_honda_civic_coupe_si_fq_oem_1_600.jpg",
    "https://1.bp.blogspot.com/-V9F0CDMS8sI/YTRlvBtloXI/AAAAAAABa3Q/PftfV4SUjtMZzXD4_MBBHpUuVFrG8rsxgCLcBGAsYHQ/s1024/2022_subaru_outback_25itouring_00.jpg",
    "https://hips.hearstapps.com/autoweek/assets/s3fs-public/15lincolnnavigator_11_hr.jpg",
    "https://www.slashgear.com/img/gallery/2021-gmc-yukon-xl-denalireview-the-recipe-works/l-intro-1645802791.jpg",
    "https://i0.wp.com/minivanusa.https://www.notonlycars.net/wp-content/uploads/2021/03/166327544_199920891563678_254655068699421442_n-960x960.jpgcom/wp-content/uploads/2023/03/2024-Hyundai-Tucson.jpg?fit=640%2C360&ssl=1",
    "https://imgcdn.oto.com.sg/medium/gallery/exterior/9/59/bmw-7-series-sedan-77461.jpg",
    "https://www.insidecarguys.com/wp-content/uploads/2021/01/Dodge-Grand-Caravan-SE-Front-wheel-Drive-Passenger-Van.png",
    "https://hips.hearstapps.com/hmg-prod/images/2021-hyundai-accent-mmp-1-1596811705.jpg",
    "https://media.ed.edmunds-media.com/nissan/frontier/2022/oem/2022_nissan_frontier_extended-cabpickup_sv_fq_oem_1_1600.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2023-nissanaltima-106-1654783713.jpg?crop=0.762xw:0.696xh;0.168xw,0.0893xh&resize=1200:*",
    "https://www.carscoops.com/wp-content/uploads/2017/11/Honda.jpg",
    "https://www.wardsauto.com/sites/wardsauto.com/files/styles/article_featured_retina/public/uploads/2011/11/buick-verano_0.jpg?itok=sjURljRH",
    "https://handh.blob.core.windows.net/stock/20058094-1-medium.jpg?v=63817269496133",
    "https://cdn.carbuzz.com/gallery-images/1600/935000/100/935107.jpg",
    "https://media.ed.edmunds-media.com/chevrolet/sonic/2019/oem/2019_chevrolet_sonic_sedan_premier_fq_oem_1_1600.jpg",
    "https://www.motortrend.com/uploads/sites/11/2011/02/2012-nissan-NV2500-HD-front-view1.jpg",
    "https://www.cars.com/i/large/in/v2/stock_photos/8502966b-855d-40ae-baac-a4bce24def8c/33bfd572-01e6-46f9-b989-b883664a5ef3.png",
    "https://www.topgear.com/sites/default/files/2021/12/JaguarXType_3.0-2004-1600-05.jpg",
    "https://www.topgear.com/sites/default/files/2022/03/1-Mercedes-SClass-plug-in.jpg",
    "https://s.car.info/image_files/1920/chevrolet-g30-conversion-vanside-1-963261.jpg",
    "https://s.car.info/image_files/1920/chevrolet-g30-conversion-vanside-1-963261.jpg",
    "https://car-images.bauersecure.com/wp-images/12967/volkswagen-egolf-01.jpeg",
    "https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2019/08/037560ece19343ce1900dc125c41b1e6/aston-martin-dbs-superleggera-volante-xenon-grey-8-jpg-2.jpg",
    "https://s1.cdn.autoevolution.com/images/gallery/land-rover-range-roverevoque-2023-7545_26.jpg",
    "https://cdn.dealeraccelerate.com/cam/34/679/8695/1920x1440/1968-pontiac-firebird-convertible",
    "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/11q3/409394/2012-cadillac-srx-first-drive-review-car-and-driver-photo-411880-soriginal.jpg",
    "https://s.car.info/image_files/full/0-889380.jpg",
    "https://i.gaw.to/vehicles/photos/40/32/403222-2023-ford-escape.jpg",
    "https://blog.consumerguide.com/wp-content/uploads/sites/2/2019/03/VW-front.png",
    "https://www.motorbiscuit.com/wp-content/uploads/2020/03/2012-Fiat-500-Abarth.jpg",
    "https://gomotors.net/photos/05/6e/saab-9000-cs-view-downloadwallpaper-600x379-comments_c4a66.jpg?i",
    "https://www.northjersey.com/gcdn/presto/2018/09/12/PNJM/9a3dc783-70f0-421c-9235-030342ad3aa1-090918_D_2019_KiaSorento.jpg?width=660&height=441&fit=crop&format=pjpg&auto=webp",
    "https://static1.topspeedimages.com/wordpress/wp-content/uploads/jpg/201505/2006-lamborghini-murciela-18.jpg",
    "https://cdni.autocarindia.com/ExtraImages/20200528034156_kia-rio-2020-static-front-1.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/a213107-large-1655144753.jpg?crop=0.710xw:0.533xh;0.160xw,0.323xh&resize=1200:*",
    "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/99-best-luxury-cars-2023-bmw-i7-lead.jpg?itok=1azqGINZ",
    "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
    "https://parkers-images.bauersecure.com/wp-images/17053/930x620/00-parkers-best-new-cars-coming-2023-2024-polestar-4-lead-alt.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0wzUVOOj-foNq1IdxYdmwpRqFCXlb4o7Lw&usqp=CAU"
  ];
  
  export default carArray ;