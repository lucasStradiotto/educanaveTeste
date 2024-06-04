# educamix-portal

## Php Version xampp 7.4.27
https://www.apachefriends.org/pt_br/download.html

### Installing xampp 7.4.27
```
sudo chmod 777 xampp-linux-x64-7.4.27-installer.run
sudo ./xampp-linux-x64-7.4.27-installer.run
```

# Setting database
* Open a web browser and access *phpmyadmin*;
* If database isn't created yet, create a new database named **mixkids**;
* Open the database and select option *Import*;
* Browse the file at the path **EDUCAMIX-PORTAL/kids/banco_mysql**;
* Click on the option **Go** at the bottom of the page to run the import.

# Permission to upload files and server
```
sudo chmod -R 777 /your_path/kids/areadospais/{videos,ebooks,jogos,jogorfid,mundos,musicas,avatar}
sudo chgrp -R daemon /your_path/
```

# Trocando Url's
As urls deverão ser implementadas na páginas **config-conexao.php** adicionando o **host** o local do banco de dados, o **user** o nome do usuário do banco, o **pass** a senha do banco de dados e **db** o nome do banco de dados.

# Running Project
* On github choose the educamix-portal project and click in code, copy the https url.
* Check the xampp folder on your system, open the git bash terminal and type "git clone" and paste the url.
* to run the project open the browser type "localhost/educamix-portal/kids".