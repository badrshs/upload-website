-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jul 02, 2016 at 03:33 AM
-- Server version: 5.6.30
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hz_zag`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `status`) VALUES
(16, 'Dresses', 'enabled'),
(17, 'Skirts', 'enabled'),
(18, 'Suits', 'enabled'),
(19, 'Trousers & T-Shirts', 'enabled');

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE IF NOT EXISTS `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `name`) VALUES
(1, 'Red'),
(2, 'Green'),
(3, 'Fushi'),
(6, 'Purple');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(96) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `models`
--

CREATE TABLE IF NOT EXISTS `models` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  `is_primary` tinyint(4) NOT NULL,
  `status` varchar(10) NOT NULL,
  `image` text NOT NULL,
  `model` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=139 ;

--
-- Dumping data for table `models`
--

INSERT INTO `models` (`id`, `product_id`, `size_id`, `color_id`, `is_primary`, `status`, `image`, `model`) VALUES
(5, 3, 4, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/439297870b1572a47cc92e0df7f7f37fb7c34120_1a5291ef38891410c986d9df30aa597c48bc60d6_8cb720a3387c94cef53a761888f41f752391520f.png', 'http://hasanzohdy.com/zag/public/models/80dd64d9a26b149e385e1282d2468619e5076e5b_5eade4cdcda2764f8c51b2c2321f033fa28fe44f.js'),
(8, 3, 1, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/78c0e0fb41547219bc238c40e415a0a6d585043c_81715fc9486d8867d4724486ca44d02693641044_ee6cfe22e1020602c96e483deb577f6e793af24e.png', 'http://hasanzohdy.com/zag/public/models/44243665756a77be53faf9d0fb51458f0c04f52e_47dad09bcf6e1b1e413176a0e9cfb025b9edc487.js'),
(9, 3, 5, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/2b9a6af99149a6965c162188225e1fe160522488_a1d0566c77290fdbc125835189c3c8965892d757_c9f1d0ad2e80903ff3fc237878544f659dcfffdd.png', 'http://hasanzohdy.com/zag/public/models/064b6a0804af24d533c29c9484a549321a47dd60_91621a3409cbd34fa30a6d5b163c7f4fddb211bf.js'),
(10, 3, 5, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/243e4aabdc3dc1291314740526e48973f9425966_b22ccd5bb967e78cb8f28aec1080ad9cc009e353_088d64d127f8bac1f95cb42687c0d960eb0ddd14.png', 'http://hasanzohdy.com/zag/public/models/36f6987ccf44fcff907bf34da610a4fd1bcfb31c_e6243c9a15dfee8130a76852d0cd57be3b7d6593.js'),
(11, 3, 5, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/be1378a3a686e1dc0c7a782c9dc78942dda20c5c_f5a65d0809837b03d6a753c4810c4ee552e2d596_f0b4af052337ab98aa80097f11ad3450ea2b00f2.png', 'http://hasanzohdy.com/zag/public/models/18df66a8e605eba59a8fbfb015c1a340c2130031_ea650f780a4770a65f51f18ef5efb22563cc7443.js'),
(12, 3, 4, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/c18d5b0756bee6ada8ad4e5caa9c4082dd52c05d_69abffbdaaa33e734c64f85537a95dfd7db657d6_9d302948e5f916707933527bef1ccd654e14991f.png', 'http://hasanzohdy.com/zag/public/models/9bb2ab0334186f5a3f910f8f8e0212fe0f33c901_390f610df3704dc72582e85fbb31812afa5f0889.js'),
(15, 3, 2, 2, 1, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/62c1ba0a8d0c839ad880c1e7d5a4bfc2c518365e_16d0389b5a078f5080a393e765072f7663c222de_0516158d3e328f93d2c9bfedbef1d74ea5953bc2.png', 'http://hasanzohdy.com/zag/public/models/5053a28d23fd2111f91e7af2a87a1e4a6e493a8a_8136735ecbeafab1ab355fffa40e9464787eb226.js'),
(17, 3, 1, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/86c71998950e038bfbc42ab5ce8374691a182024_8af9f8734f5ec6e89ce7efef1663561ea776a64a_3bf2f7648cb777f8f482a0d124f40cab410c4ae1.png', 'http://hasanzohdy.com/zag/public/models/1d5fff760415376a78981beb7fce21af6b20280b_27c227d7ec2393bddb5df0d129a1f80e7b0bf649.js'),
(19, 3, 2, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/bba643ed2d60d0806b1e0ca6e95e8e32aa12acd2_29f79489211a7cec494442040137477764ad27e5_edfdc67d280d34d028c2fa0fac2278cbd7a4acc6.png', 'http://hasanzohdy.com/zag/public/models/9742769dd0b325b741630171b22f088bc875be57_88efbfba50868a8831ae544c31c2da868882f51b.js'),
(20, 3, 5, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/6e09f835c159579e2e8dbaaad924304e85681202_79768e02e0fc67f59cd7d748b7cb679a43980b3e_3a4e15762d5a6970b9f3d2406036fc0bf99e91df.png', 'http://hasanzohdy.com/zag/public/models/0508d1b98762ae651ca0c1cf43689a90ef4e5cb9_1a3b68916e4a7f44ee556c2f1b89c108b2bcc03c.js'),
(21, 3, 7, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/59144fcd2d43dab066d967ce9a0bd2c625036f9a_16eed928e792bdce05e9a686051c10215e039f4a_554f697cc89871162d0cee07203793279b965e32.png', 'http://hasanzohdy.com/zag/public/models/c29dca24ae1c598309e9c32030b6248b6ea3e876_bf2ed1fa34711efac7fc933fc8162f8d464f6495.js'),
(22, 3, 4, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/d165d9b8938938303758c3a8e8aef006d78e5cba_e6e69eff160b163798e9d81cfab9409cf60950f8_92c9fb884f8eb6febafef1897f1adf74c0270d5f.png', 'http://hasanzohdy.com/zag/public/models/0be776c4a62d9276749ef9b893b71db6d49ff174_fa5834fd8f3196f009b5681bbd950d8d3fe02625.js'),
(23, 3, 1, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/cb0317fa1133bbb1a598ddb76770c1816faa9fa1_ac7da081c88b4d32d3612578bd77ea9e75453407_67ada7ef4821e2ce574e9585c2d897745b6159ff.png', 'http://hasanzohdy.com/zag/public/models/314df7a3059cbefba3166c4458070cfbecbc2f2f_0b5ca00b9bdd1aa7a18e95ed27289d4df6f4b1ad.js'),
(25, 3, 3, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/f5b1a01878815ae75c66d83c2d8a7c452336ceb7_330fdbbb72cdc5f9f1eeb4ad3ff54f89764d1d10_69e7aa796c754d9f4f5e795d03e770ecfaa5fbec.png', 'http://hasanzohdy.com/zag/public/models/9d888dd4b79331c05c8d0d2472b3eac847b8dd3b_a44be47248bd556834807aee2140dc2a392347f5.js'),
(27, 3, 7, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/fa40964d40280d647cdbe02392a43a6cfdec8dc3_3a972896fde0510ac805cac02d2358153dfe72c7_c287c02dfe2122af71f4e64669267cd8ac2ca291.png', 'http://hasanzohdy.com/zag/public/models/994e739756e98b2d07206dade0d094c8a7e8ccd5_d83de2cf040055b703fe6cf9863c625d461b066d.js'),
(28, 3, 1, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/773cc7ea1f82f9d30a1cd85c30819b57fd3a3968_b1b0106a7c00c0586c92d0efe58e4d3f24d82b9f_d1db7b3e4e669b8b08fd6698f7b1d410500f0f5a.png', 'http://hasanzohdy.com/zag/public/models/f058e754a9a3348399d4b25371e5627db4637525_bf4ab918ff11fca99c2050932aec0f97ea2cb7db.js'),
(29, 3, 4, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/ba006aa54846d0496402ffa92fdbe527479fe39e_1af253536bbf8ff69e49a8e3d9062cbe30aaf056_70dde8ee702de132745f865a1623455d172aff10.png', 'http://hasanzohdy.com/zag/public/models/2ccab404faf1df06b4cc986890f59522c53e0c46_8d37bb307501ee378b01197799f98401b1b4cdb8.js'),
(31, 6, 3, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/a566e33da7ca5d6fcecdf4a6998cad98ab44f6c9_88cb439702bfc18a6daf3f83a37f19ddfefbd4a1_eb12d183fbce5bef32131a39c5aeffda693694a7.png', 'http://hasanzohdy.com/zag/public/models/f41a4576de730408f1f949055c7578a9e5d45cfc_f3ef1c6b7017aa34c5633f30fd15f95c34034187.js'),
(32, 6, 5, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/cb3fb98fa4bb22914282bb43d1279ff6cfb46669_7447b0d4ba1d1288186b9421234c1bac051ec102_1d8c8c7759898dfa0bac7a22ba117c63be133a3d.png', 'http://hasanzohdy.com/zag/public/models/bb9f168911532d123fe9fd5f21e4bd482778b903_96625b79362654858c32864a80a4e7ae97cc555a.js'),
(33, 6, 7, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/7bb64152af1d001ab89138758276b9abaf9fceb2_c6a6b2775f87f7c5f969882bb20bc3de40fbdad2_c8ac9c4531b77c908c07f679487718a5c26fea15.png', 'http://hasanzohdy.com/zag/public/models/eb87904ea7d89df4a95407e95bbbf9061b4f24ff_36de663bdcd61fe58a090a929726978d992b86dc.js'),
(34, 6, 4, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/c80e664e70817fcec7d7ca83b16b858debdf0f9b_b3531f77395b955cd29a8cac2b6f977f33611f5a_93eb76b4f5e6231642885d64e1ff97b89eabc4ec.png', 'http://hasanzohdy.com/zag/public/models/5a8d5073b98e554aaad6273504e362137faea82b_8ea6c9d2ae1ccddb0110ff8987d6cb121973fe3a.js'),
(35, 6, 1, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/e10e5556e7292823f7aad669a8584796a4579d2c_4f69f596d02ef4c5a811992d55ab08cd457cb3c2_17bc4b422b9b0dd9685bd0bbb22c58421fbbf2a2.png', ''),
(36, 6, 2, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/59c430e3d564cb76b604ae64e8aa6c97e2d81207_dc3ab51d77b79b8d7278d779e862f46ff1da60a5_99d3e38fbba64823208e13b775cc1b1b402b3069.png', 'http://hasanzohdy.com/zag/public/models/f7c68ea82e919311f8851462830568c9ff622384_a669664ddff5a487c146bfd9cd8a842d306715be.js'),
(37, 6, 3, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/ba282dc5f2adb8892f51d95ad15ff70228261719_a41206b528f9e917a35ad5fb5b527fd521c5adf7_017acef11555cbb7d5095d60c45ab10161185752.png', 'http://hasanzohdy.com/zag/public/models/478de0a53ee4f803259c5e8f92576aaa93ff9e2a_65a84b0c0ba4782bd88a475610efe52ab5d614c4.js'),
(38, 6, 5, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/bbcba4eab5abe2d28462ff1326a52bd9a0d06b39_4066cd1a552df80f7f74f1d2d78462ad9082d36c_c56d918a71386e4bc60b11674a078442234efac4.png', 'http://hasanzohdy.com/zag/public/models/36a6c01c9ffb391cb853965fd6db047b487fc60b_a64f29ccf150690fccd18480a4a733f54691e3ff.js'),
(39, 6, 7, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/db88344561104eb7716c13ce870a03a2814be4ff_3470f794d1383017b946572d4525fadbd375bb45_7212ca4a354910ae5e708bea33f53561d87f47fc.png', 'http://hasanzohdy.com/zag/public/models/656e7a8130fb189065e2f681b4171d8bc4a4d372_62e22eb6c39bb759d4e36e4ad31b43ce8ce2fba3.js'),
(40, 6, 4, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/de74d330b49f00e25d359fa403c13e9ed91952e6_6e1f110b75c9b1a1c105a3f441cd09c0f0b4efbf_48813d21523acef4420f44cd8c589a4ab7341baa.png', 'http://hasanzohdy.com/zag/public/models/44c9d24e5a8ebae66764824e4a79994f22ce33df_205944dd41a447d8200c3818e6e7523093bd7207.js'),
(41, 6, 1, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/e0883fb1f423d1708df44a06376e6abe0fbe0c27_566e1d80151f322b8a89b10a9d7cb6fe415d4697_c56458b571cd0b97ed15468c37682c1b7d23fb6e.png', 'http://hasanzohdy.com/zag/public/models/5ef0dccd9f726e6f470095ec8c53b4e36b3840da_e78107ea38484afd0199f588c234ef8ca95e0a05.js'),
(42, 6, 2, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/66ac1cee4661a5a306bb77b61b4a45c663d5e009_1c8a483f757d23f17851347acd4a317fa540daab_1aebe95f9da750dca2be1bf8cb72b45b812ea2df.png', 'http://hasanzohdy.com/zag/public/models/e8d6364fd1ac64a019d7b825bd11253b0f862a04_820f1c09e9050805020015d37fcef0ab8617c96a.js'),
(43, 6, 3, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/f971187f8e9db16428f7002041406bcba20922eb_68302bf3b7e50a795701a79db55ee550ebe7e37f_028ac7176ddca5f75b50632a408f2dc9dc43776a.png', 'http://hasanzohdy.com/zag/public/models/4f4b16215cd1927778313fcb6a7167b7918e164f_03837d5cd71ed6da23dd56bc4a8ab09f06745e21.js'),
(44, 6, 5, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/bdda61c342fdefaeb3edb2c399ffbcc86cc2885b_bfd952a9316b2888baca012e0e7d50c3d45534e5_1e9e0e1c8cbea37add9cba33ba81847182d359e0.png', 'http://hasanzohdy.com/zag/public/models/3b4a6432d0fae65045fbf75b420d37df50cf8913_9b2031f5d13e94452f52f4583d9e32e7796056d3.js'),
(45, 6, 7, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/b60ee531b8ebc4ab600b71c94becb01111fce6f0_1bd4fc6da0ca45924e5cd019e89e41ccdcef4d83_85e33a146b6ef30f9fbf4a09f620674e369ee4a5.png', 'http://hasanzohdy.com/zag/public/models/613871ad55300653b0c6dbfbffa919209ffc5604_534b8048020e0f0c30cc4b0650b1dc2086ecb4a1.js'),
(46, 6, 4, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/5a5f5156b62f4868036c34a02b7a04e5ca8cc1fd_17cd3f1c1be806affc49bc70e14bffb095a6aeec_0067fd437f13fdff80e3dd0520b7ca0a909cba27.png', 'http://hasanzohdy.com/zag/public/models/88cb698c298c7950f3b03c294408bde58f54e895_cd171ac8c2fa1ad36a5eb5d571adb4bb87d71c9a.js'),
(47, 6, 1, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/10f8b0c71cfbfdc8806b29f2c5bf4a0f00724c38_91d517764c77d1dc7f58322f4ff62cc1f2666ccd_19f52a0041cb9c7a211305e90ecc7905ebca8a5f.png', 'http://hasanzohdy.com/zag/public/models/019b85f3db285e31753575dd1b8a1d9d1d8e5722_37e3ea53e09074aa0b7117577997f74fd207025b.js'),
(48, 6, 2, 6, 1, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/3db906f4dfe7a04354a3ddb4263e715416a4f4f5_a1e41399b430f519e2b927d983d46a676f1dfe78_c6d06083f3a3a34fa18a706dfc13fd25eb031d30.png', 'http://hasanzohdy.com/zag/public/models/e84b6310df24a298931672c221a5133ef7bf39a7_1301e533a7662c5254ab5866dcc011180e0d3f32.js'),
(49, 6, 3, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/4e99b9d4d980dc13d88d7aac935972f841d4a521_222b219ec36d8ea43707dd55efb13619b096091c_c0d239cd7090f1b5d23c1b3db69bef8429e94d8d.png', 'http://hasanzohdy.com/zag/public/models/346ad4ac13495e798825ff1a6dcbcbc4accedf49_22bfcfacf5a2a6242e7e381a717c357e0300af24.js'),
(51, 6, 5, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/9ac801856da13ae4aa536ea92c07ce813275ae17_b7f669fc2e765a0df18fdd0054fc5a9cc5cd5945_79986b54a93ed9d80a3899e8e0082cdafffba7ef.png', 'http://hasanzohdy.com/zag/public/models/b0d291173f0bf71beec785baf0a60713ff0ab1d6_d93ca0600cf5a127d0b13648b0344cdf2454d76a.js'),
(52, 6, 7, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/85863672e7092480063e2056443c9c645b8f09cb_b49690e445f1f698724175838d7159f95e048bdd_46ef3b15b28b60375f0c0f2dfa6f17ad4d8b6e74.png', 'http://hasanzohdy.com/zag/public/models/0d45f0f341ede070bd0f603d29c232ae027f7578_e9e933fc306a7fed8c5b242c51ebaba81cd47947.js'),
(53, 6, 4, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/c031742c9861a1ab50a8245d06eeb5d83470eaf2_4f5c6d5b05a38b8d6a57928cac0dd13651101bd6_8c39589d462636238e5879774db9f6a8ad8b80e7.png', 'http://hasanzohdy.com/zag/public/models/4dee08fa949e44f882ca33974b6bd9559737a864_aeb798639ecd536b889fdaf898be7ec991cca186.js'),
(54, 6, 2, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/2fc0e85ed362db12475c02a7a6cea979e117fdab_50a58e436bd8337d40e93021b7cd0961e850dd9e_de2d27fed21d66b51368651611cf32daa1eb2591.png', 'http://hasanzohdy.com/zag/public/models/8f1549bf250ed7e45ad730ed1fc1e0a9e20e56e7_02bd42ce2d636d9bc39a7f9d2124b6e2e7461d8c.js'),
(56, 2, 3, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/a0102dc9819c09d2bf4e594d9ed9a6f0aa6b9c2c_656f1d1da81ad8ed2c01e88a958025d6c296c355_350f251b81a18bb986ed8ac3a0f9b56ec97aee3c.png', 'http://hasanzohdy.com/zag/public/models/f09ebb06ff03f8f13cc31946c5249fe88479e890_350bd1ede04ac2a0fe2da96614e8c650812394c5.js'),
(57, 2, 5, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/b2dddad2337de3099c0051e66a172c03081b5f88_4437b9fe7375f459fa73c78b7d9abde6f61bdb0f_0c48ad7988250aad9c368f8b9767b6d9b74a15fd.png', 'http://hasanzohdy.com/zag/public/models/ce62f7851636c2f8633ff0da3731a4a0a36c1fab_139835e0e9dba2c9c6fdba3dd458f7c095fa8343.js'),
(58, 2, 7, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/5cf884e0a067bab66cb2b2f3c8a3cf18fd85370d_77ffee5e8abb7afa9288ff78fc1663a29ff7195e_be472b3ebde09037f0d4f6363a2897f4efdff7da.png', 'http://hasanzohdy.com/zag/public/models/4ba806132ee068695d30856f400eb2da71df4e62_ef08a2de962dc9c95d366c3d3da2dd1d9c01cca9.js'),
(59, 2, 4, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/b25a331688479f0ead0da7027ed38b776fb30b93_3843df96e1073196678d9af83d76de02c8bd72c5_81a451b80c346aea757b7992d955d054ef60d9d0.png', 'http://hasanzohdy.com/zag/public/models/9e305aababa487cb92dfd083cca1d5527c28ae76_a15a819e6c28b2300853e924cc54a15ff38556d4.js'),
(60, 2, 1, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/59f7a4405c086f5141dc622237d6e0fa398eb130_171ebdadd2c17b8fc1df3ebc15f2e254e1ebbb13_743b62005df085324277f1347d412504d323bfee.png', 'http://hasanzohdy.com/zag/public/models/ce5dd01bf887a7b2f190cb1934ecd8955b7da30d_86864f0e2466c791d5b8469ed9eb9e954833046d.js'),
(61, 2, 2, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/e717dee254feb540b64de2d3b439ba88c54fdd9c_d60bcdfa576e65f776e77279502436c16c6c1469_c0332a5fc89549e123c6f07d707748a5f74d42bd.png', 'http://hasanzohdy.com/zag/public/models/be69bc6317fc3a13a8055f7124060444138c9543_36e665f986bd1034fafe189259c5dcff32acf608.js'),
(62, 2, 3, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/e84097695d1a73804978b7da956c416c80cde970_eb0c8e34605902b51a5f6fa0943edb849a2677e2_2e50b5e5954533a6a85014c780a4eb68cfe44a9f.png', 'http://hasanzohdy.com/zag/public/models/16ab13a70ae636a8087a330700ca9e21a98e9888_a41af35ba15335bb095e338507129799bb1bc540.js'),
(63, 2, 5, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/088d6707ea951e96912e9ecdf9dec7a6bf9ec523_1d553f87f030bea977dd1ec8579acf52ed21eca6_97fa4644a572525e2d6f8f0deee9a623f66ffd9a.png', 'http://hasanzohdy.com/zag/public/models/535da19668ff6300ce5156cda4e824280c0e59f2_e659ee7cd163e1d65a418fe587000cd4ca69f94b.js'),
(64, 2, 4, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/04033bc9bc11e77290a4bec45d3e6bfbb37288cf_3481a888f9f0b9a8728fce61841ec0902af77488_aa580774e4b50cc4679939a1a7683a3b2b30e85f.png', 'http://hasanzohdy.com/zag/public/models/39605c947e7193467223947398e056da9eef6de5_d8ee6f0f97f13a22791a41d04ca6a20937a96973.js'),
(65, 2, 1, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/5f861a3f6f3081b4a1d4ee77f2d72e64462c2787_61a7edf357c99f27d7e0b17d40895b66e48582e6_64f41d8595e1cdc1bef10ec24e0f780bff52a993.png', 'http://hasanzohdy.com/zag/public/models/733d9fb2e363b7af4ddc345d933a7a987606915a_8f446de2a5e81c82b9ef3ad1624fbcead1833014.js'),
(66, 2, 2, 2, 1, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/48502e2c5d11feb90c126f1ff0c8a32cb1c3a910_b4f8ab156e0858c715fb88f6e88eed0fc90c1fbc_74f2b07f3c363023d3bdf9053d90f287ebbe21ad.png', 'http://hasanzohdy.com/zag/public/models/bdec93a3eb8c0c400775092caa6a632a3ba77c12_1795bc2a64f0984d3f9abd90d6dc0b837de6586e.js'),
(68, 2, 5, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/136be1694ef479c0590f352f4ca4daf7cc3a8817_437d2732d916c7a86ae0d258b550ecd600a63643_aba0a23931f99e63ffdee2cea20521fb9450ec36.png', 'http://hasanzohdy.com/zag/public/models/77643c7f2727945788af88a6d9e31caa737ad3ec_0f9bc67eba9064ee43d305cbe6b832e010c1a695.js'),
(69, 2, 7, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/22b91a49b8c29815e903bd7e936aae03292f6cbf_edd4a4ed77331cf7b95aa80e4297b52e018ff917_9a7108c8765f0939016e8160a0b538bf0b8a397c.png', 'http://hasanzohdy.com/zag/public/models/3f076de2c88eee453d1054990a310e530b9f426d_dc9e5de6e2abec561ce9bced2e1030310b32b2d1.js'),
(70, 2, 4, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/c300b7d91d16d9f7a1ad354031b7e974754c929a_ea8ecc7fac85c5fb15e9d84df17a1b02c57b1077_1567be352d79fb6d46ed80596dcab8f005106210.png', 'http://hasanzohdy.com/zag/public/models/f98d66d26e4f75759536af681485b43c9874a06b_0138ed019831f0bd130416ac6e124f337d3088f1.js'),
(71, 2, 1, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/d5a1a89b67d1994a03d8458bbda611148b4f850f_ac7498123256f6806083caa3afa517b213af4d88_20b37a45040a9e0c60a81b2c1718d0e335ad212d.png', 'http://hasanzohdy.com/zag/public/models/d5b07f58100692199cde9304f08ece69c284b11b_66743ac7ab9a74b81e7b524f6bdcf6763b78c644.js'),
(72, 2, 3, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/08b7eb9366467bbb1500d814561873b638791041_278978b36cc5b1e2e70389405e2ee5b4b3abacdf_5587ed82ab1dbbf9a636c3f338ee1351c182457b.png', 'http://hasanzohdy.com/zag/public/models/bb35bcc2c5477dfd387342617ba609246ec6e025_55861572627c437eebaceb1c0d5568b848324147.js'),
(73, 2, 3, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/0741efd4f1dd46b499e4dab72720d8afc0befa26_073239d4f5074a304ca4c8dfc089f9dd0addbb16_11f6b16ff5293c1884627cbe1c12dc8f3f22b1e1.png', 'http://hasanzohdy.com/zag/public/models/7003ab7cccf821bd813aa58340d319b2fdffeccb_a5648f31d9a248adbbc59d008d235c84c94bed39.js'),
(74, 2, 5, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/19af0bbd3020d7b4590400c44690b94bb7795d23_2536c1e0f2e45235a0f07270c04e8880778c9d6c_9d75c35364da66a483156224c8974cd56cea5555.png', 'http://hasanzohdy.com/zag/public/models/34f54f319530c9ec80bb76a36b44345c5769c4bb_74e3c721acc790056c8cc155dcf55a18ab44d8e1.js'),
(75, 2, 7, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/12af31223ac305c4acd386c6dcf9a3dd0a297786_a46e57ec2eda56c025602c79241fe4367fdd8be4_2a430ac76cc05593d20cdbc32a43f2a10f28ee97.png', 'http://hasanzohdy.com/zag/public/models/5dacf0c088bb55f4616525d27868d8872b330060_e0023333ce938ed9d4c852c700f08365f9474caa.js'),
(77, 2, 4, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/61eea11717ab17e247aea86942353e254228c853_db00881fb545c048b3b8ff648e3e740443f584ab_5db23f22f6b66ca6eba95efcab4d03d75158f8cc.png', 'http://hasanzohdy.com/zag/public/models/bd091f2eb15840e550866583afaf854e64a0b0c3_73778aa57501aa83de7573e7a2211d5550936db8.js'),
(79, 7, 3, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/822e9721e9d7bbc08cd988fc5d6d75331f982f44_99b0727e70cf799ccc115817bd8c3bc4ab02429b_39e288ea5da4665f275ae72cab13d9d8352132ba.png', 'http://hasanzohdy.com/zag/public/models/cec049697e075529fb5a337f0fb09c4d04ad0eae_79fe79261d921ec7f569e0afb3d0b67227be68ce.js'),
(80, 7, 5, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/9f0ab76bb5508b1b67aceab9d251e2d82ed05950_07c5f0898d4333375c2d9fc05e86eeb778a623ce_03d4a69cfaf24a398e3edb0b03cd74d9150b0411.png', 'http://hasanzohdy.com/zag/public/models/c963d587f30c1ee59be41a57ebf75eb828ffcd9a_5747298d63e8811a55509365f6911e4f05770a8f.js'),
(81, 7, 7, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/08b2717b287494119492201421f9958e761a7e05_d7ce5bea35e3d25f1681b326b7531f75b0ecc797_566260205b95fabc3deac153a2f2d2edd4cd55e9.png', 'http://hasanzohdy.com/zag/public/models/f91fdc79a96ce345654760d23ef02b040bc73616_3ad9fd37108472b7c84c447b23c90e15209c50b3.js'),
(82, 7, 4, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/0d0c27da7e3dc3d76f8037f38c51d77b2b6268b9_2a64c83009b8ac3496bbc0759196ed979fcf6561_dd0e7129f8a6fce2ab73b9b3f946e88764f5a232.png', 'http://hasanzohdy.com/zag/public/models/1881ade2ed72cb11d230fed6eabadd4c16744ea1_f2d28bbac3ee7c9c136d9f743d7f02909f6a19a1.js'),
(83, 7, 1, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/bdf74aefce8bb454a646d1a9e8d9155e365ce501_53700facb6503a56a9a32582bd42197861733bf4_18ca49e0c97bd50d3652092ff3e0de6b7632986d.png', 'http://hasanzohdy.com/zag/public/models/4d9a39960eebf0a27721c80899359d0e25c2d707_b74c4c543c51d681191a629359df68a2a168ae8d.js'),
(84, 7, 2, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/602271d0bcbea282dda325842a46514866aa054d_a60c6e6d9a2294014a2a48ca720801b7bb046fa4_32af07d4fa277572476cbb1e44475c6925b3140d.png', 'http://hasanzohdy.com/zag/public/models/df1e01a2ee76ff2bcfbbb52e68499404196593a9_918249d2b59bcd12d17be331a6a3445955e747e5.js'),
(85, 7, 3, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/2d4bc6c10e95d04947354167590fe8bfccfa1e56_6d1b9d90f30f7fd53913471fc1fff7a7018e9199_25a819d006ef0870a4e9d8deb47da79cd2f982e7.png', 'http://hasanzohdy.com/zag/public/models/b1feb3c35fee47bc2f7f0c6bd9a854caeee8053c_60397daff1b5823b7d69adff816a075e913136b4.js'),
(86, 7, 5, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/1c577ec9ea244b5cf7cb99d8b88532b028c9f2f0_b67d502f698acae5e480bb7795629e2fefd703b3_4a18386ca30be6a6c49cef3a37b5b3079c93bfe9.png', 'http://hasanzohdy.com/zag/public/models/8633bde433ce3a0883cb0c5cf30cde38e692fd7d_ae274b4cd570aa5562118ed3adb7969961009422.js'),
(87, 7, 7, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/b82f3b18371a08c343fa39ea707fd368a0e67fb0_acb26523077ad3df7bd78babe690be2cc4ea46c1_bd26b03d1e83d51c8eaf4a9bb0ab96da1b1ae1f9.png', 'http://hasanzohdy.com/zag/public/models/3b2dc19205512239b3301cebff98e24cc6216675_f205b1d96f2f318748eb25ed49c227f41b1f39e3.js'),
(88, 7, 4, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/a8d96e6c9a724dea403ffd55e225200c1221b42c_fc6f32534c2b5629ea9136ddd4883ade37a49a39_e43c4fbb16d69277b9ec54a700a32b3509c08e6f.png', 'http://hasanzohdy.com/zag/public/models/eba2fcacef125b8d822d31188c7fe8a8f5b611a2_a91fa1d6c6834c24a068222c61f042f0a6c59422.js'),
(89, 7, 1, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/7408d327e3b6385fd2f598d515ebcc5562f9a8fb_6c66b66270748ca35d866bef8019ef07885acecd_3681780a41346f081db3080574fb1e76536527d2.png', 'http://hasanzohdy.com/zag/public/models/df9d5ce2db217e2ab364bb1294a7d7474599729e_20100cb700bca54415f6ddcf3166665a6ce075d8.js'),
(90, 7, 2, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/38bbdcef5dfc2272c6f2e8cb8c4d09fe7f937afa_fc056cc56bb1a9e274199775c65f4c54640765f8_f2ec5d60e50c6dca938eac32769414641ed8d97c.png', 'http://hasanzohdy.com/zag/public/models/f52df1fa77ce425661e485aa17ea721795fde88c_8965945f747c87db86361314d18f36d5cdfdcc0d.js'),
(91, 7, 3, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/2c9dee9539017717c8fe2ec78f0ba3a5be43f1a3_6613c8ea840bf336c10cb847db535d79ba2ea40f_6a26d85ae1b28680725181d14937d40e347d2f7a.png', 'http://hasanzohdy.com/zag/public/models/e39e3014aa6523836eb3497d5707c22b4543f171_6b2e520050c08e3fbd61d13c034d4b45baf5a87f.js'),
(92, 7, 5, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/cf200ddd81b627bb4e40158a4b35076bc5daaaf5_dadebf4f660aae26333fa496026eff31ba969938_d022789fe50bacf4ce27189a8bc99b62878e18eb.png', 'http://hasanzohdy.com/zag/public/models/0b986a6806cfaf90d38cd052d14d85f0a5a31b88_6046ba5418f5467503245f044534520a0ff27636.js'),
(93, 7, 2, 6, 1, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/ee4656ab845d052874755bf573d9998da3fe550a_329e6cc4f0eac15199f5f25550143f8ba79f19c6_aeb13b0c8c9ec47b4416a11873222d3d3b661dcb.png', 'http://hasanzohdy.com/zag/public/models/711927208f99c41ceeac90aac99d54029212b83d_7b0df3121f4299f37dc87dd81be1f69498680d6c.js'),
(94, 7, 2, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/6538328ae24e5f334b3b69dc442363bce6c6bbad_90b8acfbc7f11d8ff78aeaa6ab2a435ee2e2c3fa_7c8b9ef726330b7eb1049f6d5d7c487f7e650b13.png', 'http://hasanzohdy.com/zag/public/models/7ad74d9d19b52ff4d52cc0ba0aaf3bf5d817b808_da838c2f5027a2f4e8dbbdd07d3ad7368364bb60.js'),
(95, 7, 3, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/01641bc6550ffd3840e2f960293ad05f2e6784c0_f339159601441af8e483629c247c7a51ecadfb57_f65d98e3cab26b547c9f9b21dcb96ab315737461.png', 'http://hasanzohdy.com/zag/public/models/7b876031819b616d464ba8dc9a7926bbeaec9f65_6522b90bb033c895a2a126c3269cab1d0f74c32d.js'),
(96, 8, 3, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/a7e1ec58ae299baad261ffb18f6f41a5d11911f4_3516696e71d59cc4685ed6886c7c421e3dfe8b88_ec63e1c565e243a15016bcccfa7c584f10cc2d53.png', 'http://hasanzohdy.com/zag/public/models/f5a02f14d38dacc715dac333c15ec47d929adedf_e51a87250add4dd222e3aa664cff0e498f107d16.js'),
(97, 8, 5, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/f8a0d38de6d8c6fb160e27e878840542ebaf3539_2d94c2ec8e31e61fa08e3a24dd8d1f6954eafcc7_5a6b559740e4bd6976642d4c367ad8bc53f7268f.png', 'http://hasanzohdy.com/zag/public/models/ae960f556ea1a4eb310d9c0c4f24dd7a1cb0a305_8bb7f5a8aa7a5843ebb072369d65d74b83bae055.js'),
(98, 8, 7, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/77dee7ff551d94340e7717f3df5c84b4a12a9272_41bd485508e6e7588ff24d9745991747232c8680_7349d9a2a1badc0bc4ed81591e986b1e11559cb7.png', 'http://hasanzohdy.com/zag/public/models/255920e0a162c8d0b6352062de9c1cd3935856f1_bd515946e39e89116b05ea39c88d7a3d91bfb89d.js'),
(99, 8, 2, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/8a67845eca04660c31ab355fc90ebd8e3f0809a9_b545e5382e2dc0923b9167eaa367ccf8f1cbbdf7_e7a48d4f28e4c991ceb88483146248e01330de63.png', 'http://hasanzohdy.com/zag/public/models/1d5f806edccc01b045cf49dd48d11c5614dce48d_e47e1b49cba9275e990756a8a84a01f8a034ebf7.js'),
(100, 8, 3, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/d7c294fcb5f5c62a19a7122fdab18c328eb3b20d_20e14d7fb1699f66f11a2068f1689da86568c4ae_51daeeec0695abc112714f7f69615e42065d6bc2.png', 'http://hasanzohdy.com/zag/public/models/a63bdf0232678dceb2467e8ded5ac8acbe339da0_f82cd356f8bb12567893570bd49a732ebdf62d95.js'),
(101, 8, 4, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/a3fa3342fd4d662582adfcc54bf73763ea488d2f_0baa81ace5336d8419349fbd0fc3936d309f2c30_d527eab90ca5c4740890340f9097015b8065484b.png', 'http://hasanzohdy.com/zag/public/models/b2fad1555ef46eda0a942c3255b438c60692d504_4e722dc5df323dad407157319ba36ba471bea6c9.js'),
(102, 8, 1, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/51ec9879555989b2bc96e2bd4f478a3b1e58a8a2_348e9019e3df47a16ace3e850d878f03edf62e1e_4e79dc3b6964ef23a95baeca13c98ba9b1376e36.png', 'http://hasanzohdy.com/zag/public/models/1df2ca1fd1b1599561851b5997e74b18c9dce59d_e31cff672f2bf54e1924012ed5c29212112ff518.js'),
(103, 10, 3, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/b3265da7b6cfe5841d55b37a9db113691f8d5829_cd9005554c0c1c5af2d63ebd4602838f14a23c3c_4a1c175d69a71e1e7762c1a20a1e42f6cb99840e.png', 'http://hasanzohdy.com/zag/public/models/8ec2859473b85eb79b07f07f5e9dc5b9329d396c_bd7c7d8011f5901aec97ec4c0cb2298d26c066ef.js'),
(104, 10, 5, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/9e2a5417bbc3dd95642662ba73247dabc98176c8_cd400ae76eb90120f49ad8df5779f26e6bf5d209_b25a7162b8e1f38cde63c1d2f742a606847a7cc3.png', 'http://hasanzohdy.com/zag/public/models/b82aa40a0ba81155a0cb030e0c7c2dcd6f7af8b7_684d1936b9e2183bc3b4da4c2caa0f6f285514df.js'),
(105, 10, 2, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/dee560b7ddbc70a500ac2398fc4eaadc7c39db60_9a472f81cfe6a817994600136b504d5339f503f9_df981ea5f2685461ea631d9169135cee0c7001f4.png', 'http://hasanzohdy.com/zag/public/models/30d252e13922db43962866fe0c3b345f674502f3_cc9f3a75ca0924f8252abcca925d4e3117918668.js'),
(106, 10, 7, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/9318cb4d5f809e269899829880a41e6a861187f0_97edba3c609c3d37b8b9345b56b58188db262376_c674b82df810e3c9a517063f8938c5e21ae79bfc.png', 'http://hasanzohdy.com/zag/public/models/885d7adf8a9810844f322e722a9aa04a90df35f7_d67dd45d56e456783723cf6106bc8d5561161093.js'),
(107, 10, 2, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/0388d8c1e24ac116ae2802afebd8754d0065d949_f42fae377c8ad154759faff13bc5112826149a0b_c6fb1652e9b337c9997b40f23f4df8be34e2f160.png', 'http://hasanzohdy.com/zag/public/models/7b14ddbb2048b6e59972de6264cc8c78707bc5d9_c844a3a411becee39f6c679a495d1854e8258fbd.js'),
(108, 10, 3, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/a3d98f46a8c39192a9ac7d87c7e38826d0401289_aa11b183829b9ea1066aac0a4a3cdcacb2c46e10_4e4ea1f52044784061ffc79f9a87c69457ddc71e.png', 'http://hasanzohdy.com/zag/public/models/8dc2b4a2eccd5830e634a7e47a8f0fc570252b1d_d8f5be3d7f60cf9b4bea8445fd2a873a93d3c8bd.js'),
(110, 10, 5, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/472b415714ef3f967aa6b2c6e8827afd3c4b3230_8d43e02520a4077cdbf79929cbbaf414171dd38b_d9c5adc45ddf3a05fdfb39d28b8c7dc7b03177c6.png', 'http://hasanzohdy.com/zag/public/models/33a7674e7b96372b5e4174e3596df7fdc2b3fb5f_e703b249a5e9d448625097b2e42893bbd41089ba.js'),
(111, 10, 1, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/4189b79081f5068cf0d0a4fe966b544593d56bac_b2bb16d31d549bd8cba2f54ea7a9a0449497b0e5_b3221910076cb23e06844fa7fabac82971da575b.png', 'http://hasanzohdy.com/zag/public/models/25a3abb6df3e1e5564b9705b0816f7989277cb13_cb8ab2b8d8dbfe6f4b066a494e5594152aed1cc5.js'),
(112, 10, 3, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/0e5ab7fea1f6e3036081016adfdc371e2736c111_9bc530619fbf7e168abcbed742b680a00fc53c10_3e42748ff9a9a8c3aae5bc7222f5aa43d7e31255.png', 'http://hasanzohdy.com/zag/public/models/fc7cf193b6092c39f5c8de8e629cac72a59fa881_a3280d4dcc4c74224a2f83f2f029bc8a7498e2c2.js'),
(113, 10, 2, 1, 1, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/3b61335359a276d247abfc1b0bc11c528fa5e4b4_4b562d27ffd01785dd9da6d3c6c1c3f0fb3b51dc_f758392e56185ace08dcd78ef9125a79d899f5b5.png', 'http://hasanzohdy.com/zag/public/models/8aa93b189f95f93e727a0160b8cf7fbc32f62694_9617746d7f9a74d52c957ed934170095e72cbec5.js'),
(114, 10, 4, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/5984ff551c8ec966fcd4b6d1639c0fc039d7e492_8e152335fa58706fe2b2a71dac6e629f0da7aa45_c4f654a2e4e5b5888b20844537e6fc38754c5a02.png', 'http://hasanzohdy.com/zag/public/models/3eddf01ae3c859d136cc3509f8cd607c9871dac3_a5f25bf4ee2c98c71e7b7f3df5aad7fb9aaa5e42.js'),
(115, 10, 1, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/296473d59a592bd87c05547a036eaceda70b41d8_cb55536c396cb332c6ea7bf35530a4a763770dcc_a010a81479687f28e20c9ec98724f1d70ae09ec1.png', 'http://hasanzohdy.com/zag/public/models/6c7a6774a81b98a484c430a19510c38e9473e69a_fe78b4dc36ac17f8c5457095b502bc7542c2365b.js'),
(116, 8, 3, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/624a414821547a822bdfb00981f656647db4281b_6a8c545fceba743f1e99c5b38a44bf7e91cc49b2_b3aaa0c4b26b70dd0681331bc1de67ff1aaf226c.png', 'http://hasanzohdy.com/zag/public/models/9dbb05efea4981f3d391151224cf26360bb7db5e_3a4aa2ecb50a1515150f1c90aa6265d675130479.js'),
(117, 8, 5, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/e4e5a92706cb208c6a7c52ba2989ef974fb6317e_1b2f069e9378c8ca3464315a2daffaa2b24f5aed_8d9833944dd6fe8dd3b01a47445f40c5a295d656.png', 'http://hasanzohdy.com/zag/public/models/2f5bf7e5c0363afd78fb6c9c9b855ffc9ac9b092_702b678f439c08b49c529a13c4d45183b20af070.js'),
(118, 8, 7, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/d05f0bbeec9662d5ed25f469d50e74384ec6add8_7a0764efb31a0dcd0190a0b471656f1634b2f7fc_d183c7a86046018834266cd3122cb22e391d2341.png', 'http://hasanzohdy.com/zag/public/models/da35104675da1b9d520707572047698f2e684d79_08af525722ec5d9b45c2a0e3cba2fd4fd1cd7cbb.js'),
(119, 8, 2, 2, 1, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/74307b84bf5aa424a2b858a87c04a5cd9afcb308_f6853977c66d73d13680765c02535613b263e2cc_e743b8951a2c4a46150f4027418b9d2b95485708.png', 'http://hasanzohdy.com/zag/public/models/34844411833126054f52c076b3c55ff267e54e08_455287a46abfd301eddf05ef3593dbb8eb3f10a2.js'),
(120, 8, 4, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/b353cbcb91fca913f3604e4d794bc9a516cda3e7_ff138935785cf1d964c0802e2f2a2e4f3bb39c95_a047ae161c6810a839f42450f1a83fd6018c2c89.png', 'http://hasanzohdy.com/zag/public/models/b92bac5f00c5b33d5ac318cd0a6b24bc848415d6_5e23728d4f7f2564b6f159a5acae772203539d1d.js'),
(121, 8, 4, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/0700576466ad10ac7e5cddde8105587468f4f193_25d0ea23b8c066067e4ebb9d4052975b8528d5e8_f5aebed4a12717666e2dcde9ef653ca3deff2b24.png', 'http://hasanzohdy.com/zag/public/models/623f7087976d8e865d06a343b578cbded0ceb2eb_5eab886bffff0fef37593c94e086a7d1ed757a24.js'),
(122, 8, 3, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/7d5fbb92060e3fa2e546f42058471b9be6e396b5_6e4d55b7bdce8c2b39d6d4b6fc5aa8ea11a7f7ea_e24159a769fcaf3d46e8e1603de49a7ce4be7e03.png', 'http://hasanzohdy.com/zag/public/models/41535af4e5b5f2daeb981f56c6b8b777d8191cd0_662c148b34844476e298ce29011e108ac814ba9b.js'),
(123, 8, 5, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/e30f2387faafb1fcafc843ca1108671f95700e1d_af08f62278aec96c1735ac7515daaf8e618d2a73_f270bc309ba55aa0a0d0a6ad5f595c8513f177b1.png', 'http://hasanzohdy.com/zag/public/models/ee9599c9a43f07e3af1a5560c4f50cce5f062ec6_4cb9738e3272f5192295cfa69ffa12796f9b8223.js'),
(124, 11, 3, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/76ceb9fabcc846cdd76183a159e6fae72bc5ed34_997b539546851f3b75161ea401bd9836316116c0_0f54f43da4e6480245529735fc55ecd115c78c4e.png', 'http://hasanzohdy.com/zag/public/models/599126140bc0aa3ad74e27b6c7a22c810b777745_f8174d07b2a865a92095196ac0c4fa068d367a10.js'),
(125, 11, 5, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/4776c8cef577e297ff050ac967d2c595fb3d50c1_9490b8aec1e54c1d6db0a69b5d0049c6405cec7f_760ab955961795d90552f7c8f08dc7bf46352ccc.png', 'http://hasanzohdy.com/zag/public/models/75ae30f79732f5cc809d2e8b23b7c4a77a349a86_c70696e081cbccc7d5418912ee8ca41be8265c4f.js'),
(126, 11, 2, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/eb3b4cc564bb47cd5b6750e6edf9213f451852af_c204a6ea00f049b9890d94da02cefbab6d80d1d5_f09714f4c5888ed13b507435144004b2abe31817.png', 'http://hasanzohdy.com/zag/public/models/0f951ef275af8561d6f02a8beacb0a224ec6b2cf_9d128ccb81a1f9828aa35ed815997c6f3e026039.js'),
(127, 11, 1, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/bfbf931ec224175cde6ae0800521179eca6aa291_e5f495df31a755504e97428904104e775e960eb0_21e026e5bc5b7f60e499750d5965c94969e0b30f.png', 'http://hasanzohdy.com/zag/public/models/e67f3119aaf099cd53f498850140153219e6c138_57dfb3e6fb90d356f38d2309f301264532ea2da8.js'),
(128, 11, 3, 2, 1, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/06b4e7d947c8dfaa440b991aae71ee6eb4d48e88_aee06bf95ae1aa909f90c267a2d70154559abd1a_ccefaf97201ebe04daabf5be01cda94c8c671a8a.png', 'http://hasanzohdy.com/zag/public/models/31116151c5a401216064cf6a94f97f2b109b02d4_936720459b45f06db9d0ba73b489b318220b528b.js'),
(129, 12, 3, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/1ab9f20d62ec7dc5d3b2df703355c34e322834f5_17c1c0565984a6bd161ae041d7ffc7a7d1940d8a_c2bafecc8a89a9c32d32363c42807e53a9024964.png', 'http://hasanzohdy.com/zag/public/models/454c3a873688e1088b3a44496fa4e626f4ed0a85_75da899365c3a23cb74c2207e6eef91644f14fa0.js'),
(130, 12, 2, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/346a81761709b1adf4cd374d0983843de98dde6a_ca69aca1d1a58ea6586d6cae2a6ae9199000a77a_879311203f81c254ce9f6d0cc768832ca689e865.png', 'http://hasanzohdy.com/zag/public/models/3ec2d3fc0ee162034440243d42ef17074f6cb427_6e06491f83a8ae3e13f90210b3df404945832549.js'),
(131, 12, 3, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/b178e8f94135d3661c8a6087c53a842ad3d8a3d2_a5559ee9ae67119038e42c0cea6365403eb784a4_ee6ff900a632f7f25537aab182d1e3e851a79605.png', 'http://hasanzohdy.com/zag/public/models/f99d86c96716ec2a515dc79e2dfae03933cac76a_a223ae2aa2189574f6b9b3e732a02b6587cee91e.js'),
(132, 12, 2, 2, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/82347e5bf52c51d6de7fedbd42a4a3add83c4cff_492f63f9cfe552380927b5001701d3134a3ac57c_b8aab21142380c3b503b887aaaf36a82dd02c9e2.png', 'http://hasanzohdy.com/zag/public/models/e6bcdc2c44755f61d3a38cdc0550e576f4a7c23f_1d4cf9cf68844ba1f981de91437627702d7e3c98.js'),
(133, 12, 3, 6, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/7fa7200f7c2457be4568ba61eaffa6be50ac84d8_3a3e7a3114bbfc83a95f090ba98e525279b44c26_158ec7634213f9da8a87cab0091159ed02732d56.png', 'http://hasanzohdy.com/zag/public/models/291e069e3d8e794a986f37810eaf2701f66a942e_9ce51cda67d90575f088dc586c080ee6837ffdee.js'),
(134, 12, 2, 6, 1, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/0518a728c0d94164ba782dac0b524e4b933f1119_9675c09c4a436484e9a69ceb2faadf2e78baffc8_d535effd8b5ca86d2610096023e0037d606086f3.png', 'http://hasanzohdy.com/zag/public/models/bfc7563085e51c7205297fa98bc617672e65bd18_c49304ea4c52967c119ea98dfd71bf5af4f79c49.js'),
(135, 12, 3, 1, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/c7ad7ec4f5429e46c4d69d648bdd1ff0a0a3c6fc_bba9e222d232be9f30a8bc753329fbfcdb25042d_e9b32d699c0143a7f63225fcc8447759ae475c48.png', 'http://hasanzohdy.com/zag/public/models/9130b0c5e95927f5f84f27a72287773551349407_fceaf7bc5e81de9f49ce2806eafca8d483180376.js'),
(136, 4, 5, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/1d8a875116a9db01c952586d0af6499509de7eb7_f56959e7b29a9ffeab4a9885988ffc86169b60ce_5b517b98de7b6a51ba7c4307907ac7a448bfd061.png', 'http://hasanzohdy.com/zag/public/models/8bb5ced6c802f9a6aebd4a730c8021e9667180c1_8c06c73c0b187c2154c37680517430c46f5a1c18.js'),
(137, 3, 2, 3, 0, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/cb7438ce8ec8e41beb6ae719836c677b946afd8a_21a11444fcdf7f82aa2451f58cef173b88f13a7d_ec9a05bf8330f3c44c85373a848f969a78db33fd.png', 'http://hasanzohdy.com/zag/public/models/7418f5ec31c9924046608538d3b9dfab921a7902_899d7c63f5b085455021de59bcd2264834b43363.js'),
(138, 3, 3, 3, 1, 'enabled', 'http://hasanzohdy.com/zag/public/models/images/ef66386834023714d7b2cc87ee367d39497e61e9_a82310a28e1640ff792008c11ed6fe0d509ff4e5_209f0a5dd5a9cf84bb3a9269989bc4fcc73d3742.png', 'http://hasanzohdy.com/zag/public/models/d2ee24b14f8c7b211be584b25fe9de718aebaba5_21736233efb6f6bb53045844280963a20a0d4b9d.js');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `first_name` varchar(32) NOT NULL,
  `last_name` varchar(32) NOT NULL,
  `email` varchar(96) NOT NULL,
  `phone` varchar(40) NOT NULL,
  `final_price` float NOT NULL,
  `shipping_address` varchar(255) NOT NULL,
  `payment_method` varchar(100) NOT NULL,
  `created` int(11) NOT NULL,
  `comment` text NOT NULL,
  `status` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `first_name`, `last_name`, `email`, `phone`, `final_price`, `shipping_address`, `payment_method`, `created`, `comment`, `status`) VALUES
(1, 1, '???', '????', 'hassanzohdy@gmail.com', '', 1400, 'new street road', 'cash-on-delivery', 1467437644, 'Perfect ', 'pending'),
(2, 1, '???', '????', 'hassanzohdy@gmail.com', '', 250, 'Good', 'cash-on-delivery', 1467440088, 'thanks', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `order_products`
--

CREATE TABLE IF NOT EXISTS `order_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` float NOT NULL,
  `discount` float NOT NULL,
  `new_price` float NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_price` float NOT NULL,
  `total_discount` float NOT NULL,
  `final_price` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `order_products`
--

INSERT INTO `order_products` (`id`, `order_id`, `product_id`, `price`, `discount`, `new_price`, `quantity`, `total_price`, `total_discount`, `final_price`) VALUES
(1, 1, 16, 330, 0, 330, 1, 330, 0, 330),
(2, 1, 17, 400, 0, 400, 1, 400, 0, 400),
(3, 1, 18, 700, 30, 670, 1, 700, 30, 670),
(4, 2, 3, 500, 250, 250, 1, 500, 250, 250);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `description` text NOT NULL,
  `status` varchar(10) NOT NULL,
  `discount` float NOT NULL,
  `rating` float NOT NULL,
  `type` varchar(64) NOT NULL,
  `image` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=48 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `name`, `price`, `description`, `status`, `discount`, `rating`, `type`, `image`) VALUES
(2, 16, 'A-LINE DRESS', 300, 'A-line dresses can work for anyone, which is wonderful.\r\nThey are very universally flattering.\r\nBoth pear and apple shapes can enjoy wearing this dress type.', 'enabled', 0, 0, 'model', ''),
(3, 16, ' SHEATH DRESS', 500, 'The sheath dress is a good choice for an apple figure.\r\nThere is a bit of wiggle room to hide a bit of a tummy.\r\nThe key to making this work for your apple figure is to make sure that you do not choose a dress that is too small.', 'enabled', 250, 0, 'model', ''),
(4, 16, ' MINI DRESSES', 250, 'Mini dresses are great for petite women.\r\nPetite women do not have the long legs that other women do but mini dresses can accentuate their legs and make them look longer.\r\nIf a petite woman wants her #legs to look even longer, she can wear a pair of nude heels with a mini dress.', 'enabled', 0, 0, 'model', ''),
(6, 16, ' PEPLUM DRESS', 700, 'The peplum dress is good for broad shouldered gals.\r\nBecause it has some flare at the hips, it can help you to find some balance.\r\nThe wider flare hip equals out your naturally broad shoulders.', 'enabled', 0, 0, 'model', ''),
(7, 19, 'Women''s biker-style...', 200, 'Your wardrobe has never been so glam rock with these women''s five-pocket treggings featuring chic biker details. We love their super comfy stretch knit, topstitched knees, zipped bottoms, and rivet finishes. Zip and button closed belt. Lower leg widths: 12 cm.\r\n\r\n', 'enabled', 0, 0, 'model', ''),
(8, 19, 'WOMEN''S CIGARETTE TROUSERS', 4000, 'Comfortable and stylish, these women''s cigarette trousers have something for everyone. We love their snug-fitting, city style cut featuring piped pockets in back. Their cotton/elastane mix provides for the ultimate in comfort, both day and night! Lower leg widths: 14 cm.\r\n', 'enabled', 300, 0, 'model', ''),
(10, 19, 'Women''s fluid trousers', 600, 'Brighten up your looks with these women''s colourful fluid trousers! We love their colour and super soft print, as well as their sweatpants style cut. Wear these trousers with a plain coloured top to bring out their colour and print. Details include pockets and an elasticated waist drawstring. Lower leg widths: 11 cm.\r\n', 'enabled', 0, 0, 'model', ''),
(11, 18, 'ladies dress suit', 800, 'ladies dress suit cotton design ladies fashion long jacket tunic design 2012 coats names tops\r\n', 'enabled', 0, 0, 'model', ''),
(12, 17, 'straight skirt', 920, 'Full skirts are normally gathered or pleated. gathered skirts do not have structured folds. They only have fabric folds at the waist which has been pulled together. Pleated skirts are stitched in such a way as to show fitting from the waist.\r\n', 'enabled', 0, 0, 'model', ''),
(14, 16, 'maxi dress', 500, 'They are especially good for women who have a long torso or those that have a slightly boyish figure because it builds in feminine curves.', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/ba5a77ea7086f80bc2181dd036c2362ca72e8d7b_460fc21d5d00d6418f970448dc2b268c9799d514_464d6f36844036f6eaf019462d004f973e69749b.png'),
(15, 16, 'wrap dress', 700, 'Wrap dresses are wonderful for women who have a pear shaped body.\r\nThey accentuate the small waist a #woman with a pear shaped body has.\r\nWrap dresses are also good for women who want to accentuate the proportions of their body.', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/32da6c335963b0addb10c26773b2aed2759d3b97_c83890b6de1ac104715db9525477b60ef2b1cc92_57fcb373b86d23657869c0ac7fc04186d3db4670.png'),
(16, 16, 'mini dress', 330, 'Mini dresses are great for petite women.\r\nPetite women do not have the long legs that other women do but mini dresses can accentuate their legs and make them look longer.\r\nIf a petite woman wants her #legs to look even longer, she can wear a pair of nude heels with a mini dress.\r\nA mini dress also does not #look quite as short on a petite woman, giving them more wiggle room.', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/1410247120c7216789c950b5e0e29ba1fbea4ddf_d56a93f52615dc24a68dd3d66d5208c0a946e9d3_3059730b2514acb5af657e1bbbc5b9682a8223f1.jpg'),
(17, 16, 'shirt dress', 400, 'The shirt dress is a good choice for those with an hourglass shape.\r\nThis dress is not very forgiving.\r\nIt is best to choose this dress only if you are fairly satisfied with your figure.\r\nIt is not a dress that offers a lot of camouflage.\r\nBut with the right figure, it is very attractive', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/ee4c5d8591a9a07d42ce88cb29d0865815de10c3_2dfc624369e267c75f26ed6c46d920f71c1ba8ce_a5d50e3c2d2bd2bc2160520a86df98d59e106ee1.jpg'),
(18, 16, 'sheat dress', 700, 'The sheath dress is a good choice for an apple figure.\r\nThere is a bit of wiggle room to hide a bit of a tummy.\r\nThe key to making this work for your apple figure is to make sure that you do not choose a dress that is too small.\r\nIf you make that mistake, it will be hard to hide anything.\r\nThe sheath dress is one that can be worn by most #body types, though.', 'enabled', 30, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/405e26f9b77a928505752b0cf66fe5cbdc991318_155f84f1a3f5c6bfc1e712625b72db6662035e09_a19be55f9a0c9dc9384659688da69f222ee69a5c.jpg'),
(19, 16, 'line dress', 900, 'A-line dresses can work for anyone, which is wonderful.\r\nThey are very universally flattering.\r\nBoth pear and apple shapes can enjoy wearing this dress type.\r\nThis dress is often favored by women that have the advantage of height.\r\nIt was one of Jacqueline Kennedy Onassis’s favorite dress types to wear and she was a tall five foot seven.', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/37768156bce134e65a074b9d188534ba8b06bea6_63b1f1c40086ac38ed8c01b0a06059b7bbdb3f06_00f540c83a6b24b491fac81020c8303780f20004.jpg'),
(20, 16, 'pepill dress', 500, 'The peplum dress is good for broad shouldered gals.\r\nBecause it has some flare at the hips, it can help you to find some balance.\r\nThe wider flare hip equals out your naturally broad shoulders.\r\nTry one on and see what a difference it makes.\r\nIt is quite amazing how well a peplum dress can work for you if you have this figure.', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/31eae0841bdac3a487d99369d9f3967da8f6ffbd_4c48f640d92fa3583e472e2e0ff1956af05100a9_b16273a5b7594603bd525f714f05c09c397d8449.jpg'),
(21, 16, 'simple dress', 700, 'This simple dress will never go out of style!', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/064e0f1464c40d0cbea1ad681e09e6b300c82935_e5dcd7090425570a2918d0be705ed467241201ba_ab2270240f7513de39d208b5befc29a251369e2e.jpg'),
(22, 16, 'Long Trench', 200, 'A long, neutral trench with a blouse and black pants is perfect for a day at work or a day out with friends!', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/e11248f631f64ab51010957124541348aab08151_2eee38262ad768fdf2eb8592d81e3d49f9663d43_fa511d389ed4d0150b83263e998cf58fd6d257b9.jpg'),
(23, 19, 'purse', 450, 'This green purse looks so classic paired against the neutral colors of this outfit!', 'enabled', 50, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/c91a002cb0db66624c040320eb299ab7b72e28a8_dde4694dbbb44131c0dd5838a6149a19474193fa_6e0ef7ce2788334ab9b2ec791c129972433e13e0.png'),
(24, 19, 'gingham plaid', 650, 'Gingham plaid is one of the few classic prints out there, especially when paired with cropped pants and a beige trench coat!', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/d6db6aaed34ce5c9628284e79400fe88a7a25bfb_dfcab6e41dac743165b8e6539817c038796e0a7d_b052feb8ed310c9665085cc0e46d2912b9f24dbd.png'),
(25, 17, '8. MIDI SKIRT WITH LOUBOUTINS', 850, 'This chic midi skirt and shirt look is only accentuated by the classic pair of Louboutins!', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/6ec01fea54017abdbc0dd81b06d5d8da3aaf88f7_0ddde15f724ce9c69c3286bd5145a9b9f70ffe01_e87ad74744c43f3cd4cda50979027b0ecd3dd44c.png'),
(26, 19, ' SIMPLE OUTFIT WITH LEOPARD SNEAKERS', 550, 'These black and white blouse and sweater combination is so beautiful with a classic red lip, dramatic sunglasses, and leopard sneakers.', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/5e66d238e77952f6f17690f9c7da3f173d8c9d13_1af5b54481caf1b2152b3a861ca0fbb551c5b98b_8c1d463e29bb1665953a63f0079d6f8b55f02b03.png'),
(27, 17, 'TULLE MIDI SKIRT', 300, 'It doesn''t get much more classic than a black tulle midi skirt.', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/9be6aebe346d32d4747ca8974c723cab918c855a_dee1da47df272906cba7e857677385b333a9b635_a7d8c3f57ab2a1cc9875c4f918d1ea02c67363cf.png'),
(28, 19, 'Women''s slim cut...', 250, 'Women''s 7/8-length city style trousers? Look no further, these are the ones for you! We love their slim cut and stretchy knit, which provides for the utmost in comfort. Detailed with pockets in front and piped pockets in back. Lower leg widths: 10 cm.\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/9d5500cbb33d90fbd893ed3a872d772b315d4497_5275dbcf89fa986a3842f6dc2f2225c96c862afe_954e542b4523d834682f3b710c803924609e2098.jpg'),
(29, 19, 'WOMEN''S 7/8-LENGTH TROUSERS', 440, 'Give in to the temptation of these women''s city-style trousers! We love their tight fit, 7/8-length, and leg bottom zips. Their cotton-polyester knit provides for optimal comfort. Lower leg widths: 10 cm.\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/071cd768fa6f48654214f9f6dc2c3d053fd684df_126cfd3eeef058fb4c78c8d07cdd7e27e508c07b_fc1cd748a2e8ced5718f7501fae1f8ea9af1b6b8.jpg'),
(30, 19, ' GRAY SWEATSHIRT AND WHITE PANTS', 520, 'This look is casual and perfect for no matter what you''re doing!', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/91aed20d665423ae865ee6e75a9b01b976a83f2a_77a5dc9eb7d8ef2a55c623894646dae307ec6d88_b783f3c146423057060338a7cdb31b4611d56a9e.png'),
(31, 19, ' CLASSIC LAYERING', 990, 'This layering is perfectly preppy no matter what the trends are!', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/525a3a74a646ab426840830a248a5fe5901b3e2a_d7e2fa119b964c3d610747a5b3f3a67d734d4399_5e9002f32aea4f3835e657a83a4b896dc9daed1d.png'),
(32, 19, 'WOMEN''S PRINTED JEANS', 230, 'These women''s basic stretch jeans have been revisited and coloured for the ultimate in designer pleasure! Under a plain colour jumper and a trench coat, they''re the seasons new hot look. You''re going to love their feminine print, comfy stretch fabric, and elasticated beltline which lets you slide them on in a jiffy. Matching topstitch design. Lower leg widths: 12 cm.\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/22b1052f645740a5d8fff6a89e3d1b3f210c5765_b827aeb51241b790fa7512c1d49f529aa28a39ab_3e9b317a8d3a3a3dbed0dd1f4f563df625137fc0.jpg'),
(33, 19, 'WOMEN''S WIDE CUT TROUSERS', 440, 'Enjoy a fashionable look while wearing these women''s navy dotted swiss print trousers. We love the fluid texture of their boot cut, as well as their thin belt and cosmopolitan piped pockets. Wear them with trainers for a sporty effect. Lower leg widths: 20 cm.\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/b870a862ef245bd8a53fcc5a3297e16e62dc4e79_e7e9ff2c48f94a0e8c28ee74c812e63e5d22545a_9a29a7aceb3d34a4d5ee8d6c923831a76225f8cf.jpg'),
(34, 19, 'WOMEN''S HIGH WAIST TREGGINGS', 500, 'You can no longer do without these slim-fitting women''s treggings. Featuring a high waist enhanced by elasticated strips and zips, they''re just right for making your legs stand out! Detailed with full-length leg topstitches.\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/e8392aaa3baae21a429ed531bd11a3d1b27e488d_099bd79c3b1c07790fd4c4f525f4e9ce08749c5c_bcc3ad9b41f48037033ca20fc8a6ff2bbb84f760.jpg'),
(35, 16, 'WOMEN''S CIGARETT', 400, 'Comfortable and stylish, these women''s cigarette trousers have something for everyone. We love their snug-fitting, city style cut featuring piped pockets in back. Their cotton/elastane mix provides for the ultimate in comfort, both day and night! Lower leg widths: 14 cm.\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/402455128418410b5e171c1437d2fd7417569ece_2ea97df0eee04d0a54adf4f2a269dd3eef403727_b92040749c513c443b2511409139b77d0337de13.jpg'),
(36, 19, 'WOMEN''S DOTTED SWISS SHIRT', 300, 'The ultimate in feminine shirts: we love its 3/4-length sleeves, slightly see-through dotted swiss fabric, and V-neckline which highlights your décolleté for style that''s elegant in every circumstance. It goes flawlessly with both trousers or a skirt.\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/0a581ad231ea0dba016ecd5d8abe22c2d52b0669_47b2acadb0c80a238e408427a0f79cc2f82998d8_10a569fa499e660eabab852adbc3f07dd428fcbb.jpg'),
(37, 19, 'WOMEN''S CREPE BLOUSE', 400, 'With such a fluid and stretchy texture you''re sure to fall in love with its perfect, crease-free and therefore flawless fit! This women''s crepe blouse features the ideal city look: a super comfy loose design, a wide-open V-neckline, and 3/4-length sleeves with small turn-up finishes. Treat yourself to the ultimate in sophistication today...\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/992e3781e8a1ef3859b45386f661bcace84807ee_158be4205f6cb4beb4be85d3f62a11c8b308a07f_1f3f4803ceea6e50558d9ba84f4e1ce570c1925e.jpg'),
(38, 17, 'Reference : 502420E16-0480 / C-VICTORIEN', 700, 'The most feminine of blouses: we love its neckline adorned with frills and a contrasting string tie, pinched pleats on the front, and small matching buttons. An effortlessly perfect look with city style trousers or a skirt!\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/5c72a316a157f76944f53d886c3455a8efedc661_51baa8db41d8daeceed32f9b1139363e61c6eaf1_f238303929b30a612e0f859572964c65eef92d0f.jpg'),
(39, 19, 'WOMEN''S FOLK BLOUSE', 780, 'For the most feminine of styles, allow yourself to be swept away by this attractive folk-style blouse embellished with elegant details: fluid and floaty crepe fabric, an eye-catching embroidered pattern, set with tiny metal beads, a rounded neck finished with a twisted tie and two tassels.\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/5ddefb62e54c1a37d004e0ac2a8c8b1610fa393a_7e989c1769c9f0ac32e57b2edfc541deb8025db8_35573c9d8456de8a162dd4a446b95436f9f1e15c.jpg'),
(40, 19, 'WOMEN''S PRINTED OPEN SHOULDER BLOUSE', 880, 'A women''s blouse to satisfy all your needs! We love this 3/4-sleeve model featuring an elasticated neckline that wraps around your shoulders for a look that''s both stylish and elegant. Its lightweight, see-through floral texture makes it incredibly feminine. Wear with denim shorts and a pair of sandals to make a gorgeous impression!\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/89e6b2a85eb2d5c0e4d02ba5220496a9a906e73f_908753ee9e11837f509078bde10569da1082d4d4_a087f2c68853a38f332d4c8c6d986705d1744bc2.jpg'),
(41, 19, 'WOMEN''S PLEATED BLOUSE', 350, 'We love the charm of this women''s free-flowing blouse, as well as its standout fashion details: a pleated strip with ladder stitch trim, a neckline featuring lovely small frilly trim and finished with a drawstring, and slightly see-through crepe fabric. It goes perfectly with all your bottoms thanks to its elasticated base. Long sleeves detailed with buttoned cuffs.\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/c041564c5bec67c7f28701f889394b273afc254c_ed494fed106513707531aa362d1388427b25e067_c55c400c92d223e91ba9a019b3b95a1bed132afa.jpg'),
(42, 17, 'WOMEN''S FLUID SHIRT', 560, 'Give in to the temptation of this ever so chic women''s shirt! We love its 3/4-length sleeves, V-neckline featuring a satiny trim, and pleat on the front. Its fluid knit makes it a soft garment with a flawless fit, which we fall in love with as soon as we put it on.\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/e07dbd519ad5dee7b2a9de5582d044661b57abfa_653c27cd198efcb2847c41db1f1f3487b95212b9_13378224513bc150d6a5bdf9958405870615e061.jpg'),
(43, 17, 'WOMEN''S LACE BLOUSE', 555, 'Slip on this women''s lace shirt and enjoy a look that''s both original and extremely feminine! We love its round neckline, short sleeves, and floral lace. Its drop-shaped details and metallic rivets in back make it the ultimate in delicate garments.\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/03577903b80ecf4efa2a52824bfa427208318024_70a39d597c31184e1853897668959e3322b7c63a_362fed41e9f43e5a73d8e99d338fedc3f4a9340f.jpg'),
(44, 17, 'WOMEN''S QUILTED SKIRT', 500, 'What could be more feminine than a little tube skirt? This one features stretchy knit, and we can''t resist its trendy quilted texture. Wear it with a shirt or tucked top for a look that screams fashion! Model: 5''10.\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/dca0e54b22818b071d99262eedd7317f69fa28ce_066573e4cd5192541ab2b9df75e8cb84caca8d30_8bf0f1f363f324d288329aba4e2adcf984fc7814.jpg'),
(45, 18, 'ASOS Crop Tailored Blazer in Crepe', 300, 'Body: 76% Polyester, 19% Viscose, 5% Elastane, Lining: 100% Polyester.\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/02d54cdf3eae98d4757019b576a05aa7057e860b_40676f5f492b34010a3149240462598fe94a55d7_d46aabe7a8647dba8687d5416a3f0af01106730d.jpg'),
(46, 18, 'ASOS Textured Slim Trouser', 700, '\r\nModel wears: UK 8/ EU 36/ US 4\r\nModel''s height:  174 cm/5''8.5”', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/493777ef6d424203fb14ce2a0bf861d6b4d9fd26_c3087bac0260cd636d56b1e72d589a1507acde62_22a5049656251a2a2e607cefae7ca77cb56e30e2.jpg'),
(47, 18, 'Fashion Union Suit Trousers In Tile Print Co-Ord', 500, 'Fashion Union is your new secret style weapon, whether you’re after that knockout party dress or an effortlessly cool ensemble. Overhaul your party girl wardrobe with punch-packing dresses, bare it all in a cheeky twosie or keep it paired back in a slick LBD.\r\n', 'enabled', 0, 0, 'normal', 'http://hasanzohdy.com/zag/public/products/e1e4376e16ec92ea3ef75741994bc7d351e2b44a_fdd6fa0f700adb26d7eafb75a22f6a46efdb5cfe_3b86a71897919bf5733682ea317d1c881b7f8d11.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product_reviews`
--

CREATE TABLE IF NOT EXISTS `product_reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `review` text NOT NULL,
  `created` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE IF NOT EXISTS `settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(100) NOT NULL,
  `value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `key`, `value`) VALUES
(9, 'store-address', '32 Holway St  Cairo - Egypt'),
(10, 'store-email', 'store@online.com'),
(11, 'store-phone', '(+2) 2354442'),
(12, 'store-working-days', 'Sun-Thu');

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE IF NOT EXISTS `sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`id`, `name`) VALUES
(1, 'Medium'),
(2, 'XL'),
(3, '2XL'),
(4, 'L'),
(5, '4XL'),
(7, '6X');

-- --------------------------------------------------------

--
-- Table structure for table `slideshow`
--

CREATE TABLE IF NOT EXISTS `slideshow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` text NOT NULL,
  `link` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(96) NOT NULL,
  `type` varchar(30) NOT NULL,
  `created` int(11) NOT NULL,
  `birthday` int(11) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `phone` varchar(40) NOT NULL,
  `image` text NOT NULL,
  `code` varchar(96) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=23 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `type`, `created`, `birthday`, `gender`, `phone`, `image`, `code`) VALUES
(1, 'حسن', 'زهدي', 'hassanzohdy@gmail.com', '$2y$10$Jq91lN2aSZlxfbCmoTGx8.oS9HwhDFlYGeISx610S8WR9Kr6QQUUq', 'administrator', 1466151261, 718614000, 'male', 'الفضاء الغربي ', 'http://hasanzohdy.com/zag/public/users/970007f71bfa95e92527d13bf1238331fcb01d07_8e9bf2ff664fc62ce8ac8b330daf3353c15e9113_cc8986cb5e24622209e8d2bffcfd425f9fc36907.jpg', '7fba7b819ec1e9dfca7bed07981d527353a23bbb_91c43e7149ac5864a8d651a88a6f82ff71f6eb12');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
