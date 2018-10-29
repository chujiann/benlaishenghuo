/*
Navicat MySQL Data Transfer

Source Server         : qijun
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : benlai

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-29 00:40:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `name1` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `num` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('4', 'https://image1.benlailife.com/ProductImages/000/000/346/842/medium/eaa52bd3-fff8-4efe-924c-b45002fdd41a.jpg', '台湾葡萄柚2粒装（600-700g)\r\n', '￥45.7', '1');
INSERT INTO `car` VALUES ('3', 'https://image7.benlailife.com/ProductImages/000/000/369/716/medium/4a6a9b3b-77ed-44fa-812c-b3a2dafe3a8b.jpg', '台湾葡萄柚2粒装（600-700g)\r\n', '￥67.8', '1');
INSERT INTO `car` VALUES ('2', 'https://image4.benlailife.com/ProductImages/000/000/326/506/medium/8005bf4b-7915-4b34-824e-27ebb7fed441.jpg', '台湾葡萄柚2粒装（600-700g)\r\n', '￥88.7', '1');
INSERT INTO `car` VALUES ('14', 'https://image.benlailife.com/ProductImages/000/000/344/050/medium/ee118ce0-787f-4a75-ae37-00054e7aea9f.jpg', 'https://image.benlailife.com/ProductImages/000/000/344/050/medium/ee118ce0-787f-4a75-ae37-00054e7aea9f.jpg', '￥57.6', '3');

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `name1` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `name2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', 'https://image.benlailife.com/ProductImages/000/000/029/133/medium/28fccbd8-4228-4822-9d5e-eaa1e0000b3a.jpg', '台湾葡萄柚2粒装（600-700g)\r\n', '￥79.5', '购物车');
INSERT INTO `goodlist` VALUES ('2', 'https://image4.benlailife.com/ProductImages/000/000/326/506/medium/8005bf4b-7915-4b34-824e-27ebb7fed441.jpg', '台湾葡萄柚2粒装（600-700g)\r\n', '￥88.7', '购物车');
INSERT INTO `goodlist` VALUES ('3', 'https://image7.benlailife.com/ProductImages/000/000/369/716/medium/4a6a9b3b-77ed-44fa-812c-b3a2dafe3a8b.jpg', '台湾葡萄柚2粒装（600-700g)\r\n', '￥67.8', '购物车');
INSERT INTO `goodlist` VALUES ('4', 'https://image1.benlailife.com/ProductImages/000/000/346/842/medium/eaa52bd3-fff8-4efe-924c-b45002fdd41a.jpg', '台湾葡萄柚2粒装（600-700g)\r\n', '￥45.7', '购物车');
INSERT INTO `goodlist` VALUES ('5', 'https://image3.benlailife.com/ProductImages/000/000/040/054/medium/8a2ec7d9-3813-45f9-bbbc-57002e7eee46.jpg', '张家界蜜桔 1.9-2kg', '￥67.4', '购物车');
INSERT INTO `goodlist` VALUES ('6', 'https://image.benlailife.com/ProductImages/000/000/000/098/medium/5cab05dc-4e00-4b1d-9036-d869bc73ca41.jpg', '进口柠檬 2粒装（220g以上）', '￥78.3', '购物车');
INSERT INTO `goodlist` VALUES ('7', 'https://image7.benlailife.com/ProductImages/000/000/369/716/medium/4a6a9b3b-77ed-44fa-812c-b3a2dafe3a8b.jpg', '泰国青柚1个（1kg以上）', '￥67.9', '购物车');
INSERT INTO `goodlist` VALUES ('8', 'https://image4.benlailife.com/ProductImages/000/000/370/663/medium/04395876-137d-441a-9823-a1b515bcf0d1.jpg', '南非进口红西柚4个（900g以上）', '￥76.6', '购物车');
INSERT INTO `goodlist` VALUES ('9', 'https://image4.benlailife.com/ProductImages/000/000/370/663/medium/04395876-137d-441a-9823-a1b515bcf0d1.jpg', '南非进口红西柚4个（900g以上）', '￥67.5', '购物车');
INSERT INTO `goodlist` VALUES ('10', 'https://image5.benlailife.com/ProductImages/000/000/345/538/medium/a63a3082-501d-4396-a3e8-b78140028652.jpg', '福建琯溪三红蜜柚4粒（单果1kg以上）', '￥56.4', '购物车');
INSERT INTO `goodlist` VALUES ('11', 'https://image6.benlailife.com/ProductImages/000/000/345/306/medium/fb28dbe2-e9dc-4e14-8a31-7c19cbed68f8.jpg', '台湾葡萄柚2粒装（600-700g)\r\n', '￥67.4', '购物车');
INSERT INTO `goodlist` VALUES ('12', 'https://image4.benlailife.com/ProductImages/000/000/345/419/medium/906231d1-b830-4c53-886b-da7fe24cecff.jpg', '台湾葡萄柚2粒装（600-700g)\r\n', '￥56.7', '购物车');
INSERT INTO `goodlist` VALUES ('13', 'https://image5.benlailife.com/ProductImages/000/000/378/572/medium/20029075-6927-44ec-b776-954f9b841ac0.jpg', '南非进口橙10个（2.1kg以上）', '￥68.5', '购物车');
INSERT INTO `goodlist` VALUES ('14', 'https://image.benlailife.com/ProductImages/000/000/344/050/medium/ee118ce0-787f-4a75-ae37-00054e7aea9f.jpg', '福建平和琯溪蜜柚（红肉）2粒（1.8-2kg）', '￥57.6', '购物车');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'qijun', '123456', '2018-10-28 14:49:38');
INSERT INTO `user` VALUES ('2', 'jun', '1111111', '2018-10-28 14:55:51');
INSERT INTO `user` VALUES ('3', 'fds', '123', '2018-10-28 15:00:20');
INSERT INTO `user` VALUES ('4', 'qqqq', '123456789', '2018-10-28 15:01:47');
INSERT INTO `user` VALUES ('5', '111ww', '1234', '2018-10-28 15:06:13');
SET FOREIGN_KEY_CHECKS=1;
