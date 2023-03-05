<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="new_msg.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <a href="index.html">
            <img src="../img/logo.png" alt="logo" class="logo head-left">
        </a>
        <div class="head-right">
            <div class="pseudo">
                <img src="../img/pngegg.png" alt="" class="pdp">
                <span><span>@</span><p>mon_pseudo</p></span>
                <ul>
                    <li>Profil</li>
                    <li>Nouveau message</li>
                    <li>Deconnection</li>
                </ul>
            </div>
            <div class="recherche">
                <input type="search" name="search" value="" id="search_in" placeholder="Rechercher">
                <button><img src="../img/_blanc.png" alt=""></button>
            </div>
        </div>
    </header>
    <div class="body">
        <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        </div >
    </div>
    <div class="sec">
       <div class="caroussel">
            <form action="" method="post">
                <div class="page p1">
                    <h1>Poser votre question</h1>
                    <div class="guide">
                        <h4>Comment Faire?</h4>
                        <ul>
                            <li>Indiquer un titre a votre question</li>
                            <li>ecrire son contenu</li>
                            <li>Ajoutez des "tags" qui aident à présenter votre question aux autres utilisateurs</li>
                        </ul> 
                    </div>
                    <h1>1. Un titre Pour votre question:</h1>             
                    <div class="getTitle">
                        <div class="input-box">
                            <input type="text" name="titre" id="titre" required>
                            <label for="titre">titre</label>
                        </div>
                    </div>
                </div>
                <div class="page p2">
                    <h1>2.ecrire le contenu du texte</h1>
                    <div id="form2">
                        <div class="add">
                            <div class="texte">ajouter du texte</div>
                            <div class="image">ajouter un image</div>
                            <div class="reset_msg">Reinitianiser</div>
                        </div>
                        <div class="contenu"></div>
                    </div>
                </div>
                <div class="page p3">
                        <h1>3. Ajoutez des "tags" qui aident à présenter votre question aux autres utilisateurs</h1>
                        <div id="form3">
                            <div class="tags3">
                                <div class="list-tag">
                                    <h1>selectionner une sur la liste</h1>
                                    <ul class="tagList_ul" id="ul"></ul>
                                </div>
                                <div class="create-tag">
                                    <h1>créer votre propre tag</h1>
                                    <div class="input-box">
                                        <input type="text" name="contenu" id="tag_in">
                                        <label for="contenu">Nom du tag a créer:</label>
                                    </div>
                                    <button class="ok_tag">créer un tag</button>
                                </div>
                            </div>
                            <div class="buttons3">
                                <button id="" type="submit">submit</button>
                                <button id="suivant3" type="button">Publier</button>
                            </div>
                        </div>
                </div>
            </form>
       </div> 
    </div>
    <script src="new_msg.js"></script>
</body>
</html>