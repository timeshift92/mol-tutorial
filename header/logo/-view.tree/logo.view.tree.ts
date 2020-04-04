namespace $ { export class $ts_tutorial_header_logo extends $ts_numl {

	/**
	 *  ```
	 *  dom_name \nu-flex
	 *  ```
	 **/
	dom_name() {
		return "nu-flex"
	}

	/**
	 *  ```
	 *  attr *
	 *  	radius \none
	 *  	display \flex
	 *  	flow \row
	 *  	gap \1
	 *  	items \center
	 *  ```
	 **/
	attr() {
		return ({
			"radius" :  "none" ,
			"display" :  "flex" ,
			"flow" :  "row" ,
			"gap" :  "1" ,
			"items" :  "center" ,
		})
	}

	/**
	 *  ```
	 *  sub /
	 *  	<= svg_logo
	 *  	<= line_divider
	 *  	<= svg_github
	 *  ```
	 **/
	sub() {
		return [ this.svg_logo() , this.line_divider() , this.svg_github() ] as readonly any[]
	}

	/**
	 *  ```
	 *  svg_logo $ts_numl attr *
	 *  	theme \blue
	 *  	fill \
	 *  	color \
	 *  	padding \20px 0px 20px 32px
	 *  	width \61px
	 *  	height \40px
	 *  	src \ts/tutorial/header/logo/logo.svg
	 *  ```
	 **/
	@ $mol_mem
	svg_logo() {
		return (( obj )=>{
			obj.attr = () => ({
			"theme" :  "blue" ,
			"fill" :  "" ,
			"color" :  "" ,
			"padding" :  "20px 0px 20px 32px" ,
			"width" :  "61px" ,
			"height" :  "40px" ,
			"src" :  "ts/tutorial/header/logo/logo.svg" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  line_divider $ts_numl attr *
	 *  	orient \v
	 *  	height \24px
	 *  	width \1px
	 *  	place \center
	 *  ```
	 **/
	@ $mol_mem
	line_divider() {
		return (( obj )=>{
			obj.attr = () => ({
			"orient" :  "v" ,
			"height" :  "24px" ,
			"width" :  "1px" ,
			"place" :  "center" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  svg_github $ts_numl attr *
	 *  	theme \blue swap
	 *  	width \24px
	 *  	height \23px
	 *  	src \ts/tutorial/header/logo/github.svg
	 *  ```
	 **/
	@ $mol_mem
	svg_github() {
		return (( obj )=>{
			obj.attr = () => ({
			"theme" :  "blue swap" ,
			"width" :  "24px" ,
			"height" :  "23px" ,
			"src" :  "ts/tutorial/header/logo/github.svg" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

} }

