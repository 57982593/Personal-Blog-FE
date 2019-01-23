set names utf8;
drop database if exists aww;
create database aww charset=utf8;
use aww;
create table today(
  id int primary key auto_increment,
  img varchar(100),
  title varchar(100),
  content varchar(500),
  price decimal
);
insert into today values
(null,'../img/body/aa_a.jpg','广州出发1日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_b.jpg','广州出发2日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_c.jpg','广州出发3日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_a.jpg','广州出发4日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_b.jpg','广州出发5日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_c.jpg','广州出发6日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_a.jpg','广州出发7日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_b.jpg','广州出发8日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_c.jpg','广州出发9日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_a.jpg','广州出发10日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_b.jpg','广州出发11日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_c.jpg','广州出发12日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_c.jpg','广州出发13日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_b.jpg','广州出发14日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_a.jpg','广州出发15日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_c.jpg','广州出发16日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_b.jpg','广州出发17日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278),
(null,'../img/body/aa_a.jpg','广州出发18日游','广州岭南纯玩一日游(9大景点/2个正餐/全程导服/旅游大巴)',278);

#轮播图
create table carousel(
  id int primary key auto_increment,
  urls varchar(200)
);
insert into carousel values
(null,'../img/body/carousela.jpg'),
(null,'../img/body/carouselb.jpg'),
(null,'../img/body/carouselc.jpg'),
(null,'../img/body/carouseld.jpg');

#当季热门度假
create table hotel(
  id int primary key auto_increment,
  img_url varchar(200),
  imgs_url varchar(200),
  title varchar(200),
  dateday varchar(100),
  details varchar(300),
  price  int
);

insert into hotel values
(null,'../img/body/card.jpg','../img/body/remai.png','深圳-泰国','一天跟团游','含往返飞机票(含税)+5晚住宿',1780),
(null,'../img/body/card.jpg','../img/body/remai.png','深圳-泰国','二天跟团游','含往返飞机票(含税)+5晚住宿',1780),
(null,'../img/body/card.jpg','../img/body/remai.png','深圳-泰国','三天跟团游','含往返飞机票(含税)+5晚住宿',1780),
(null,'../img/body/card.jpg','../img/body/remai.png','深圳-泰国','四天跟团游','含往返飞机票(含税)+5晚住宿',1780),
(null,'../img/body/card.jpg','../img/body/remai.png','深圳-泰国','五天跟团游','含往返飞机票(含税)+5晚住宿',1780),
(null,'../img/body/card.jpg','../img/body/remai.png','深圳-泰国','六天跟团游','含往返飞机票(含税)+5晚住宿',1780);

#当季热门景点
create table Holiday(
  id int primary key auto_increment,
  img_url varchar(200),
  title varchar(100),
  details varchar(200),
  price decimal(6,2)
);

insert into Holiday values
(null,'../img/body/Hot_spots.jpg',null,null,null),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',200.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',201.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',202.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',203.5);

#超值酒店团购推荐
create table Holidays(
  id int primary key auto_increment,
  img_url varchar(200),
  title varchar(100),
  details varchar(200),
  price decimal(6,2)
);

insert into Holidays values
(null,'../img/body/Hot_spotsa.jpg',null,null,null),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',204.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',205.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',206.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',207.5),
(null,'../img/body/Hot_spotsb.jpg',null,null,null),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',208.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',209.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',210.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',211.5),
(null,'../img/body/Hot_spotsc.jpg',null,null,null),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',212.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',213.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',214.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',215.5),
(null,'../img/body/Hot_spotsd.jpg',null,null,null),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',216.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',217.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',218.5),
(null,'../img/body/aa_b.jpg','长隆野生动物园','熊猫三胞胎，与您共享欢乐时光',219.5);


#旅行攻略
create table mn(
  id int primary key auto_increment,
  img_url varchar(200),
  tx varchar(200),
  title varchar(200),
  author varchar(10),
  DateOfDeparture varchar(20),
  dates varchar(5),
  photos varchar(200)
);

insert into mn values
(null,'../img/body/mnyi.jpg','../img/body/mn_tx.png','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','410张'),
(null,'../img/body/mnyi.jpg','../img/body/mn_tx.png','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','411张'),
(null,'../img/body/mnyi.jpg','../img/body/mn_tx.png','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','412张'),
(null,'../img/body/mnyi.jpg','../img/body/mn_tx.png','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','413张'),
(null,'../img/body/mnyi.jpg','../img/body/mn_tx.png','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','414张'),
(null,'../img/body/mnyys.jpg','../img/body/mnyys.jpg','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','415张'),
(null,'../img/body/mnyys.jpg','../img/body/mnyys.jpg','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','416张'),
(null,'../img/body/mnyys.jpg','../img/body/mnyys.jpg','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','417张'),
(null,'../img/body/mnyys.jpg','../img/body/mnyys.jpg','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','418张'),
(null,'../img/body/mnyys.jpg','../img/body/mnyys.jpg','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','419张'),
(null,'../img/body/mnyi.jpg','../img/body/mnyys.jpg','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','420张'),
(null,'../img/body/mnyi.jpg','../img/body/mnyys.jpg','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','421张'),
(null,'../img/body/mnyi.jpg','../img/body/mnyys.jpg','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','422张'),
(null,'../img/body/mnyi.jpg','../img/body/mn_tx.png','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','423张'),
(null,'../img/body/mnyi.jpg','../img/body/mnyys.jpg','走进一半海水一半火焰的摩洛哥','Miss猫大人','2018-12-12','10天','424张');

#骆驼书
create table lts(
  id int primary key auto_increment,
  img_url varchar(200),
  title varchar(20),
  title2 varchar(20),
  author varchar(20),
  gxdate varchar(50)
);

insert into lts values
(null,'../img/body/mnyi.jpg','东京','Tokyo','宫本武藏','2018-12-12'),
(null,'../img/body/mner.jpg','东京','Tokyo','宫本武藏','2018-12-12'),
(null,'../img/body/mnsan.jpg','东京','Tokyo','宫本武藏','2018-12-12'),
(null,'../img/body/2.jpg','东京','Tokyo','宫本武藏','2018-12-12'),
(null,'../img/body/mnyi.jpg','东京','Tokyo','宫本武藏','2018-12-12'),
(null,'../img/body/mner.jpg','东京','Tokyo','宫本武藏','2018-12-12'),
(null,'../img/body/mnsan.jpg','东京','Tokyo','宫本武藏','2018-12-12'),
(null,'../img/body/mnyi.jpg','东京','Tokyo','宫本武藏','2018-12-12'),
(null,'../img/body/mnyi.jpg','东京','Tokyo','宫本武藏','2018-12-12'),
(null,'../img/body/mnyi.jpg','东京','Tokyo','宫本武藏','2018-12-12'),
(null,'../img/body/mnyi.jpg','东京','Tokyo','宫本武藏','2018-12-12'),
(null,'../img/body/mnyi.jpg','东京','Tokyo','宫本武藏','2018-12-12'),
(null,'../img/body/mnyi.jpg','东京','Tokyo','宫本武藏','2018-12-12'),
(null,'../img/body/mnyi.jpg','东京','Tokyo','宫本武藏','2018-12-12'),
(null,'../img/body/2.jpg','东京','Tokyo','宫本武藏','2018-12-12');


#注册登录表
create table loging(
  id int primary key auto_increment,
  uname varchar(11),
  upwd varchar(16)
);

insert into loging values
(null,'17696194736','123456789');