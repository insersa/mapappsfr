
#Map.apps French Translation
## Introduction
You find in this repository, the bundle for the french translation of map.apps bundles.

## Configuration
How to work with the **mapappsfr** bundle ,you have to add the reference in your app.json in the allowedBundles section :

```
{
    "load": {
    	"bundleLocations" : ["bundles"],
    	
    	"allowedBundles" : [
    	                    // debug
    	                    "console",
    	                    // ct bundles
    	                    "splashscreen",
    	                    "system",
    	                    "map",
    	                    "themes",
    	                    "templates",
    	                    "templatelayout",
    	                    "coordinatetransformer",
    	                    "windowmanager",
    	                    "coordinateviewer", 
    	                    "infoviewer", 
    	                    "scalebar",
    	                    "toolset",
    	                    "toolrules",
    	                    "navigationtoolset", 

    	                    "basemaptoggler",
    	                    "mapflow",
    	                    "legend",
    	                    
							// French traduction
    	                    "mapappsfr",


    	],
    	
        "require" : ["${app}.app"],
        // Lien sur traduction dans nls de l'apps/vscarte
        "i18n": [
                 "bundle"
        ]
    },
    "bundles" : {
		..
	}
}
```
   
[More informations on map.apps site](http://developernetwork.conterra.de/).

## Compatibility
This bundle works with map.apps version : **3.1.0**.

