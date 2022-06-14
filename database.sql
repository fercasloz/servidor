create table usuarios(		
			nombre 	varchar[30] not null,
			correo 	varchar[30] not null,	
			rol	 	varchar[15] not null,
			estado 	boolean	 	not null,
			padre	varchar[30] not null,
			uid	 	varchar[30] not null
			
);

insert into usuarios values('Roberto Lopez','robertolovesmadrid@gmail.com','USER_ROLE',True,"padre",'UID');		
insert into usuarios values('Fernando Castillo','fernando45@gmail.com','ADMIN_ROLE',True,"padre",'UID');
insert into usuarios values('Alberto Lopez','albertogarcia@gmail.com','ADMIN_ROLE',True,"padre",'UID');
insert into usuarios values('Alejandro Costa','alejandrocosta@gmail.com','ADMIN_ROLE',True,"padre",'UID');

	
create table videos(

			vid			varchar[30] not null,
			nombrev		varchar[30] not null,
			url			varchar[30] not null,
			userv   	varchar[30] not null,
			categoriav 	int			not null

	);

insert into videos values('vid','video1','url1','Roberto Lopez',1);
insert into videos values('vid','video2','url2','Fernando Castillo',2);
insert into videos values('vid','video3','url3','Alberto Lopez',3);




create table categorias(

			cid 		int 		not null,
			nombrec 	varchar[30] not null

);

insert into categorias values(1,'pop');
insert into categorias values(2,'rap');
insert into categorias values(3,'rock');






