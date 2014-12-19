define({
    agsprinting:{
    	ui : {
            button : {
                title : "ArcGIS 10.1 imprimer..."
            },
            window : {
                title : "Sortie d'impression"
            },
            error: {
                unknown: "Impression AGS : erreur inconnue!",
                code403: "Impression AGS : Avez-vous autorisé l'url du service d'impression dans la liste du proxy ",
                code404: "Impression AGS : L'URL du service d'impression n'a pas pu être atteint!"
            },
            dialog: {
                title: "Titre",
                format: "Format",
                layout: "Template", 
                dpi: "DPI",
                submitBtnLabel: "Imprimer"
            },
            imgPrintResultWidget: {
                printBtnText: "Imprimer"
            }
        }
    },
    basemaptoggler:{    
        ui: {
            labelTitle:"Cartes"
        }
    },
    coordinateviewer:{
    	ui : {
            coordinates : "E: ${x} N: ${y} (${srs})",
            scale : "Echelle: 1:${scale}",
            noSrs : "-"
        },
        hemispheres : {
            north : "N",
            south : "S",
            east : "E",
            west : "O"
        }
    },
    infoviewer:{
    	bundleName : "Info Viewer",
        bundleDescription : "Le Info Viewer montre les informations sur un objet graphique qui a été demandé par un client (click sur l'objet). S'occupe de la gestion de la fenêtre d'identification.",
        ui : {
            title: "Information",
            tools: {
                closeInfoWindowMapdeskTool: "Fermer",
                closeInfoWindowMapTool: "Fermer",
                focusMapTool: "Au centre de la carte",
                attachToGeorefTool: "Accrocher à la position",
                mainActivationTool: "Information sur la localisation"
            }
        }
    },
    legend:{
    	tool : {
            title : "Légende",
            tooltip : "Légende"
        }
    },
    locateme:{
    	ui: {
            tools: {
                locatemeTool : {
                    title: "Localisation",
                    tooltip: "Afficher ma position actuelle sur la carte."
                }
            }
        },
        infos :{
            newLoc :{
                ann: "Nouvelle localisation détectée avec une précision de ${acc} ${unit}.",
                msg: "Nouvelle localisation détectée avec une précision de ${acc} ${unit}."
            }
        },
        exceptions : {
            noGeoLoc : {
                ann : "Pas de détection de la localisation",
                msg : "Browser ne supporte pas la recherche de localisation"
            },
             posDen : {
                ann : "Localisation refusée",
                msg : "Localisation refusée par le browser"
            },
             posNotAv : {
                ann : "Position pas disponible",
                msg : "Position pas disponible"
            },
             timeout : {
                ann : "Temps dépassé pour la localisation",
                msg : "Temps dépassé pour la localisation"
            },
             unknown : {
                 ann : "Position pas disponible",
                 msg : "Position pas disponible, erreur inconnue"
            },
             acc : {
                 ann : "Position trop imprécise",
                 msg : "Position trop imprécies, ne peut pas être affichée"
            }
        }
    },
    magnifier:{
    	ui : {
            tools :{
                magnifier : {
                    title: "Loupe",
                    tooltip : "Montrer la loupe"
                }
            }
        }
    },
    map:{
    	bundleName: "Map",
        bundleDescription: "The Map bundle s'occupe de la gestion des différentes couches de la carte et de l'interaction avec l'utilisateur",
            
        ui : {
            nodeUpdateError :{
                info :"Mise à jour '${title}' Erreur! Message: ${error}",
                detail :"${error}"
            }
        }
    },
    mapflow:{
    	tool: {
            title: "Couches",
            tooltip: "Sélection des couches"
        },
		ui : {
            transparency : "Transparence",
            transparencyTooltip : "Modifier la transparence",
            zoomToTooltip : "Zoomer à l'étendue de la catégorie",
            showDetailsTooltip : "Montrer les informations",
            rotatorTooltip : "Retour",
            deleteTooltip : "Supprimer",
            deleteQuestion : "Voulez-vous vraiment suprimer cet ligne?"
        }
    },
    measurement:{
    	ui: {
            toolTitle:"Mesurer"
        }
    },
    navigationtoolset:{
    	bundleName: "Navigation Toolset",
        bundleDescription: "Navigation Toolset a les outils nécessaires pour la navigation de la carte",
        ui : {
            zoomInTool: {
                title : "Zoom avant",
                tooltip : "Zoom avant"
            },
            zoomOutTool: {
                title : "Zoom arrière",
                tooltip : "Zoom arrière"
            },
            panTool: {
                title : "Pan",
                tooltip : "Pan"
            },
            zoomToNextExtent: {
                title : "Etendue suivante",
                tooltip : "Etendue suivante"
            },
            zoomToPrevExtent: {
                title : "Etendue pr&eacute;c&eacute;dante",
                tooltip : "Etendue pr&eacute;c&eacute;dante"
            },
            zoomToFullExtent: {
                title : "Etendue complète",
                tooltip : "Etendue complète"
            },
            zoomToInitialExtent: {
                title : "Etendue intiale",
                tooltip : "Etendue intiale"
            },
            zoomInClickTool: {
                title : "Zoom avant",
                tooltip : "Zoom avant"
            },
            zoomOutClickTool: {
                title : "Zoom arrière",
                tooltip : "Zoom arrière"
            }
        }
    },
    overviewmap:{
    	tool : {
            title : "Vue d'ensemble",
            tooltip : "Montrer la vue d'ensemble"
        }
    },
    printing:{
    	tool:{
            title:"Imprimer",
            tooltip:"Imprimer",
            back:"retour"
        },
        resultWin:{
            title:"Imprimé"
        }
    },
    resultcenter:{
    	ui: {
            dockTool : {
                title: "Centre des résultats",
                tooltip: "Centre des résultats"
            },
            rectangleSelectBtn : {
                title : "Sélectionner les résultats"
            },
            selectAllBtn : {
                title : "Tout sélectionner"
            },
            deselectBtn : {
                title : "Supprimer la sélection"
            },
            removeAllBtn : {
                title : "Supprimer la liste des champs"
            },
            removeSelectedBtn : {
                title : "Supprimer la liste des champs sélectionnées"
            },
            dataView :{
                filter: {
                    menuDefaultLabel: "Tout",
                    textBoxPlaceHolder: ""
                },
                pager : {
                    backButtonTooltip: "Page précédente",
                    forwardButtonTooltip: "Page Suivante",
                    firstButtonTooltip: "Première page",
                    lastButtonTooltip: "Dernière page",
                    /**
                     * the page lable literal (template)
                     */
                    //pageLabelText: "Page ${currentPage} of ${endPage}",
                    pageLabeltext: "Page:",
                    /**
                     * the page size label literal (template)
                     */
                    pageSizeLabelText: "Champs ${pageStartItemNumber}-${pageEndItemNumber} of ${itemCount}:"  
                //pageSizeLabelText: "Items:"
                }
            },
            fields :  {
                id : "ID",
                title : "Titre",
                adapter : "Service",
                type: "Type"
            },
            newDataAvailable : "Nouvelles données disponibles"
        }
    },
    splashscreen:{
    	bundleName: "Splash Screen",
		bundleDescription: "Gestion de l'attente de démarrage de mapapps",
		loadTitle : "Démarrage de l'application: {appName}",
	    loadBundle : "{percent}% - {startedBundles}/{maxBundlesToStart} - chargement {name} "
    },
    streetview:{
    	ui: {
            tools: {
                streetViewToggleTool : {
                    title: "Street View",
                    tooltip: "Street View (disponbile pour les échelle de 1:2,000,000 à 1:2,000)"
                },
                streetViewCenterOnMarkerTool: {
                    title: "Saut sur le point",
                    tooltip: "Saut sur le point"
                }
            },
            noStreetViewData : "Acune données street view dispoible pour cette localisation."
        }
    },
    toolset:{
    	bundleName: "Toolset",
        bundleDescription: "Tous les outils qui sont disponible pour les utilisteurs sont placés dans le Toolset. La configuration va définir quels outils sont inclus dans l'application",

        ui : {
            unsortedTools : "Outils non triés",
            defaultTools : "Outils par défaut",
            navigationtoolset: "Outils de navigation",
            sketchingTools : "Outils de dessin",
            measurementTool : "Règle : Aucun contenu sélectionné",
            printTool : "Impression du contenu visible",
            identifyTool : "Identification: Visualisation des paramètres d'un objet graphique",
            pentool:"Outils de dessins libre : Dessine une forme",
            linetool:"Outils de dessin de ligne: Dessine une ligne",
            boxtool:"Outil de dessin de rectangle : Dessine un rectangle",
            buckettool:"Outils de coloration: Rempli ton objet avec une coleur",
            selecttool:"Outils de sélection : Sélectionnez un champ",
            selecttooltooltip:"Outils de Sélection : Sélectionnez des champs",
            edittoolbar: "Outil d'édition"
        }
    },
    windowmanager:{
    	bundleName : "Window Manager",
        bundleDescription : "--CORE FUNCTIONALITY-- Le Window Manager gère les différentes fenêtres",
        ui:{
            defaultWindowTitle : "Fenêtre",
            closeBtn : {
                title : "Fermer"
            },
            minimizeBtn : {
                title : "Minimiser"
            },
            maximizeBtn : {
                title : "Maximiser"
            },
            restoreBtn : {
                title : "Rétablir"
            },
            opacityBtn: {
                title : "Modifier la transparence"
            },
            loading : {
                title : "Veuillez attendre!",
                message : "Chargement..."
            },
            okcancel : {
                title : "Question",
                okButton: "Ok",
                cancelButton: "Annuler"
            }
        }
    }
});