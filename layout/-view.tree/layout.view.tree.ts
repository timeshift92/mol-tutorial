namespace $ { export class $ts_tutorial_layout extends $ts_numl {

	/**
	 *  ```
	 *  dom_name \nu-block
	 *  ```
	 **/
	dom_name() {
		return "nu-block"
	}

	/**
	 *  ```
	 *  attr *
	 *  	responsive \960px|800px|640px
	 *  	nu-id \root
	 *  	id \roo
	 *  	width \100%
	 *  	height \100%
	 *  ```
	 **/
	attr() {
		return ({
			"responsive" :  "960px|800px|640px" ,
			"nu-id" :  "root" ,
			"id" :  "roo" ,
			"width" :  "100%" ,
			"height" :  "100%" ,
		})
	}

	/**
	 *  ```
	 *  sub /
	 *  	<= theme_main
	 *  	<= theme_blue
	 *  	<= theme_green
	 *  	<= theme_orange
	 *  	<= theme_purple
	 *  	<= theme_lime
	 *  	<= theme_red
	 *  	<= attrs_section
	 *  	<= attrs_block
	 *  	<= attrs_bold
	 *  	<= items
	 *  ```
	 **/
	sub() {
		return [ this.theme_main() , this.theme_blue() , this.theme_green() , this.theme_orange() , this.theme_purple() , this.theme_lime() , this.theme_red() , this.attrs_section() , this.attrs_block() , this.attrs_bold() , this.items() ] as readonly any[]
	}

	/**
	 *  ```
	 *  theme_main $ts_numl attr * hue \272
	 *  ```
	 **/
	@ $mol_mem
	theme_main() {
		return (( obj )=>{
			obj.attr = () => ({
			"hue" :  "272" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  theme_blue $ts_numl attr *
	 *  	name \blue
	 *  	hue \#3a8ccb
	 *  	saturation \100
	 *  	mod \dim
	 *  ```
	 **/
	@ $mol_mem
	theme_blue() {
		return (( obj )=>{
			obj.attr = () => ({
			"name" :  "blue" ,
			"hue" :  "#3a8ccb" ,
			"saturation" :  "100" ,
			"mod" :  "dim" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  theme_green $ts_numl attr *
	 *  	name \green
	 *  	hue \154	
	 *  	mod \dim
	 *  ```
	 **/
	@ $mol_mem
	theme_green() {
		return (( obj )=>{
			obj.attr = () => ({
			"name" :  "green" ,
			"hue" :  "154\t" ,
			"mod" :  "dim\t" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  theme_orange $ts_numl attr *
	 *  	name \orange
	 *  	hue \45	
	 *  	mod \dim
	 *  ```
	 **/
	@ $mol_mem
	theme_orange() {
		return (( obj )=>{
			obj.attr = () => ({
			"name" :  "orange" ,
			"hue" :  "45\t" ,
			"mod" :  "dim" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  theme_purple $ts_numl attr *
	 *  	name \purple
	 *  	hue \301	
	 *  	mod \dim
	 *  ```
	 **/
	@ $mol_mem
	theme_purple() {
		return (( obj )=>{
			obj.attr = () => ({
			"name" :  "purple" ,
			"hue" :  "301\t" ,
			"mod" :  "dim" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  theme_lime $ts_numl attr *
	 *  	name \lime
	 *  	hue \96	
	 *  	mod \dim
	 *  ```
	 **/
	@ $mol_mem
	theme_lime() {
		return (( obj )=>{
			obj.attr = () => ({
			"name" :  "lime" ,
			"hue" :  "96\t" ,
			"mod" :  "dim\t\t\t" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  theme_red $ts_numl attr *
	 *  	name \red
	 *  	hue \1	
	 *  	mod \dim
	 *  ```
	 **/
	@ $mol_mem
	theme_red() {
		return (( obj )=>{
			obj.attr = () => ({
			"name" :  "red" ,
			"hue" :  "1\t" ,
			"mod" :  "dim" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  attrs_section $ts_numl attr *
	 *  	role \article
	 *  	for \section
	 *  	display \flex
	 *  	gap \4x
	 *  	flow \column
	 *  	width \100%
	 *  	fill \bg :even[subtle]"
	 *  	items \center
	 *  	padding \8x 2x || 4x 2x
	 *  ```
	 **/
	@ $mol_mem
	attrs_section() {
		return (( obj )=>{
			obj.attr = () => ({
			"role" :  "article" ,
			"for" :  "section" ,
			"display" :  "flex" ,
			"gap" :  "4x" ,
			"flow" :  "column" ,
			"width" :  "100%" ,
			"fill" :  "bg :even[subtle]\"" ,
			"items" :  "center" ,
			"padding" :  "8x 2x || 4x 2x" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  attrs_block $ts_numl attr *
	 *  	for \block
	 *  	width \clamp(initial, 100%, 980px)
	 *  ```
	 **/
	@ $mol_mem
	attrs_block() {
		return (( obj )=>{
			obj.attr = () => ({
			"for" :  "block" ,
			"width" :  "clamp(initial, 100%, 980px)" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  attrs_bold $ts_numl attr *
	 *  	for \bold
	 *  	text \w6
	 *  	force \
	 *  ```
	 **/
	@ $mol_mem
	attrs_bold() {
		return (( obj )=>{
			obj.attr = () => ({
			"for" :  "bold" ,
			"text" :  "w6" ,
			"force" :  "" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  items $mol_view
	 *  ```
	 **/
	@ $mol_mem
	items() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_view(  ) )
	}

} }

