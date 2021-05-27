// index.js:
const Discord = require ( 'discord.js' ) ,
    client =  nouveau Discord. Client ( {
        fetchAllMembers :  true
    } ) ,
    config = require ( './config.json' ) ,
    fs = exiger ( 'fs' )
 
client. login ( jeton de configuration )
client. commandes  =  nouveau Discord. Collection ( )
 
fs. readdir ( './commands' ,  ( err , fichiers )  =>  {
    if  ( err )  throw err
    des dossiers. forEach ( fichier =>  {
        if  ( ! file. endsWith ( '.js' ) )  retourne
        commande const = require ( `. / commandes / $ { fichier } ` )
        client. commandes . set ( commande. nom , commande )
    } )
} )
 
client. on ( 'message' , message =>  {
    if  ( message. type  ! ==  'DEFAULT'  || message. author . bot )  return
 
    const args = message. contenu . trim ( ) . divisé ( /  + / g )
    const commandName = args. shift ( ) . toLowerCase ( )
    if  ( ! commandName. startsWith ( config. prefix ) )  return
    commande const = client. commandes . get ( commandName. slice ( config. prefix . length ) )
    if  ( ! commande )  retourne
    commander. run ( message , arguments , client )
} )
