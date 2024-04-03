# RSuite v6 Angular Plugin

This plug-in adds an action menu to any managed object in RSuite to launch a custom Angular form

##Requirements:
- RSE 6.10.0 or greater

##Build:
- cd webapp
- ng build
- copy webapp/dist/rsuite-form-popup/* to src/main/resources/WebContent/rsuite-form-popup
- from project root:
- mvn clean install

##Deploy:
- cp target/rsuite-angular-form-plugin.jar [RSE6]/plugins

## Configuration

These are the steps to link the Angular app with RSE

	action-menus.json:
		"actionName": "rsuite:navigateTo:rsuite-form-popup-plugin"
			- the prefix "rsuite:navigateTo" will launch a popup
			- "rsuite-form-popup-plugin" links to plugin-modules.json => "pluginName": "rsuite-form-popup-plugin"

	plugin-modules.json:
		 "pluginName": "rsuite-form-popup-plugin", => links to id after "rsuite:navigateTo:" in action-menus.json
		 
        "location": "rsuite-v6-angular-plugin/rsuite-form-popup/index.html", => 
        		"rsuite-v6-angular-plugin" => rsuite-plugin.xml =>  extensionProvider id="rsuite.WebService":
							<staticWebService path="/WebContent" root="rsuite-v6-angular-plugin" />
				"/rsuite-form-popup/index.html" => WebContent/rsuite-form-popup folder in pllugin

        "pluginType": "navigation", => to register this module in main RSE angular front-end app as form popup (see app-menu.service.ts#loadPluginNavModules()). Only plug-in type supported.

        "moduleName": "RsuiteFormPopupPluginModule", =>
        	rsuite-form-popup-plugin.module.ts => export class RsuiteFormPopupPluginModule

        "rootComponent": "RsuiteFormPopupPluginComponent", =>
			rsuite-form-popup-plugin.component.ts => export class RsuiteFormPopupPluginComponent

        "description": "Create an new document" => any description

##Angular

Steps to create from scratch the custom Angular app:

Prerequisites:

	install same Angular CLI as RSE core - see rsuite-ocms-ui/src/main/webapp/package.json. i.e: if angular@core is 14.1.3:
		sudo npm install -g @angular/cli@14.1.3

	check version is correct
		ng version

Create new project:

	create new workspace/project. In this case "rsuite-form-popup":
	
		ng new rsuite-form-popup
			? Would you like to add Angular routing? No
			? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss ]

	create library
		ng generate library rsuite-form-popup-plugin

	Manual Changes:
		1) change index.html:
				<base href="">
		2) import module in app.module.ts imports []:

			import { RsuiteFormPopupPluginModule } from 'projects/rsuite-form-popup-plugin/src/public-api';

			imports: [
				(..),
					RsuiteFormPopupPluginModule
				]
				
		3) add in app.component.html
			<body>
				<lib-rsuite-form-popup-plugin></lib-rsuite-form-popup-plugin>
			</body>

	Test:
		ng serve

	Build:
		ng build

Note: this will generate the Angular app. Then follow the steps to build & deploy the RSE plug-in already described.