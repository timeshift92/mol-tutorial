namespace $ { export class $ts_tutorial_header extends $ts_numl {

	/**
	 *  ```
	 *  dom_name \nu-card
	 *  ```
	 **/
	dom_name() {
		return "nu-card"
	}

	/**
	 *  ```
	 *  attr *
	 *  	theme \blue tint bold
	 *  	padding \0
	 *  	radius \none
	 *  	display \flex | none | none
	 *  	flow \row
	 *  ```
	 **/
	attr() {
		return ({
			"theme" :  "blue tint bold" ,
			"padding" :  "0" ,
			"radius" :  "none" ,
			"display" :  "flex | none | none" ,
			"flow" :  "row" ,
		})
	}

	/**
	 *  ```
	 *  sub /
	 *  	<= flex_left
	 *  	<= btngroup_navgitaion
	 *  ```
	 **/
	sub() {
		return [ this.flex_left() , this.btngroup_navgitaion() ] as readonly any[]
	}

	/**
	 *  ```
	 *  flex_left $ts_numl
	 *  	attr *
	 *  		content \space-between
	 *  		border \right
	 *  		width \clamp(320px,320px,100%)
	 *  		items \center
	 *  	sub /
	 *  		<= Logo
	 *  		<= Language
	 *  ```
	 **/
	@ $mol_mem
	flex_left() {
		return (( obj )=>{
			obj.attr = () => ({
			"content" :  "space-between" ,
			"border" :  "right" ,
			"width" :  "clamp(320px,320px,100%)" ,
			"items" :  "center" ,
		})
			obj.sub = () => [ this.Logo() , this.Language() ] as readonly any[]
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  Logo $ts_tutorial_header_logo
	 *  ```
	 **/
	@ $mol_mem
	Logo() {
		return (( obj )=>{
			return obj
		})( new this.$.$ts_tutorial_header_logo(  ) )
	}

	/**
	 *  ```
	 *  Language $ts_select items /
	 *  	\En
	 *  	\Ru
	 *  ```
	 **/
	@ $mol_mem
	Language() {
		return (( obj )=>{
			obj.items = () => [ "En" , "Ru" ] as readonly any[]
			return obj
		})( new this.$.$ts_select(  ) )
	}

	/**
	 *  ```
	 *  btngroup_navgitaion $ts_numl
	 *  	attr *
	 *  		radius \none
	 *  		display \flex
	 *  		height \100%
	 *  	sub /
	 *  		<= attrs_btn
	 *  		<= btn_guide
	 *  		<= btn_tutorials
	 *  		<= btn_examples
	 *  		<= btn_blog
	 *  		<= btn_about
	 *  ```
	 **/
	@ $mol_mem
	btngroup_navgitaion() {
		return (( obj )=>{
			obj.attr = () => ({
			"radius" :  "none" ,
			"display" :  "flex" ,
			"height" :  "100%" ,
		})
			obj.sub = () => [ this.attrs_btn() , this.btn_guide() , this.btn_tutorials() , this.btn_examples() , this.btn_blog() , this.btn_about() ] as readonly any[]
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  attrs_btn $ts_numl attr *
	 *  	for \nu-btn
	 *  	radius \none
	 *  	border \none
	 *  	shadow \ :hover[none] none
	 *  	theme \ :pressed[blue swap bold] blue tint
	 *  	size \2.5x
	 *  ```
	 **/
	@ $mol_mem
	attrs_btn() {
		return (( obj )=>{
			obj.attr = () => ({
			"for" :  "nu-btn" ,
			"radius" :  "none" ,
			"border" :  "none" ,
			"shadow" :  " :hover[none] none" ,
			"theme" :  " :pressed[blue swap bold] blue tint" ,
			"size" :  "2.5x" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  btn_guide $ts_numl
	 *  	attr * value \guide
	 *  	sub / \Guide
	 *  ```
	 **/
	@ $mol_mem
	btn_guide() {
		return (( obj )=>{
			obj.attr = () => ({
			"value" :  "guide" ,
		})
			obj.sub = () => [ "Guide" ] as readonly any[]
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  btn_tutorials $ts_numl
	 *  	attr * value \tutorials
	 *  	sub / \Tutorials
	 *  ```
	 **/
	@ $mol_mem
	btn_tutorials() {
		return (( obj )=>{
			obj.attr = () => ({
			"value" :  "tutorials" ,
		})
			obj.sub = () => [ "Tutorials" ] as readonly any[]
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  btn_examples $ts_numl
	 *  	attr * value \examples
	 *  	sub / \Examples
	 *  ```
	 **/
	@ $mol_mem
	btn_examples() {
		return (( obj )=>{
			obj.attr = () => ({
			"value" :  "examples" ,
		})
			obj.sub = () => [ "Examples" ] as readonly any[]
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  btn_blog $ts_numl
	 *  	attr * value \blog
	 *  	sub / \Blog
	 *  ```
	 **/
	@ $mol_mem
	btn_blog() {
		return (( obj )=>{
			obj.attr = () => ({
			"value" :  "blog" ,
		})
			obj.sub = () => [ "Blog" ] as readonly any[]
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  btn_about $ts_numl
	 *  	attr * value \about
	 *  	sub / \About
	 *  ```
	 **/
	@ $mol_mem
	btn_about() {
		return (( obj )=>{
			obj.attr = () => ({
			"value" :  "about" ,
		})
			obj.sub = () => [ "About" ] as readonly any[]
			return obj
		})( new this.$.$ts_numl(  ) )
	}

} }

