create table usuarios(		
			nombre varchar[30] not null;
			correo varchar[30] not null;	
			rol	 varchar[15] not null;
			estado boolean	 not null;
			padre	 varchar[30] not null;
			uid	 varcar[30]  not null;
			
)

	      insert into usuario values('Roberto Lopez','robertolovesmadrid@gmail.com','USER_ROLE',True,"padre",'UID');		
	      insert into usuario values('Fernando Castillo','fernando45@gmail.com','ADMIN_ROLE',True,"padre",'UID');
	      insert into usuario values('Alberto Lopez','albertogarcia@gmail.com','ADMIN_ROLE',True,"padre",'UID');
		insert into usuario values('Alejandro Costa','alejandrocosta@gmail.com','ADMIN_ROLE',True,"padre",'UID');

	
create table videos(

			vid		varchar[30] not null;
			nombrev	varchar[30] not null;
			url		varchar[30] not null;

			foreing key(users) references usuarios(nombre)
			foreing key(users) references usuarios(uid)	
			foreing key(users) references usuarios(nombrec)
			foreing key(users) references usuarios(cid)
)

		insert into videos values('vid','video1','url1');
		insert into videos values('vid','video2','url2');
		insert into videos values('vid','video3','url3');




create table categorias{

			cid 		varchar[30] not null;
			nombrec 	varchar[30] not null;
	
			foreing key(users) references usuarios(nombre)
			foreing key(users) references usuarios(uid)
}

		insert into categorias values('cid','pop');
		insert into categorias values('cid','rap');
		insert into categorias values('cid','rock');






