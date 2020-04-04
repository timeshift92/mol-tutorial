namespace $ { export class $ts_tutorial_body extends $ts_numl {

	/**
	 *  ```
	 *  sub / <= splitter
	 *  ```
	 **/
	sub() {
		return [ this.splitter() ] as readonly any[]
	}

	/**
	 *  ```
	 *  splitter $ts_resizer_hor pages /
	 *  	<= First
	 *  	<= Second
	 *  	<= Third
	 *  	<= Fourth
	 *  ```
	 **/
	@ $mol_mem
	splitter() {
		return (( obj )=>{
			obj.pages = () => [ this.First() , this.Second() , this.Third() , this.Fourth() ] as readonly any[]
			return obj
		})( new this.$.$ts_resizer_hor(  ) )
	}

	/**
	 *  ```
	 *  First $mol_view
	 *  	title <= first_title
	 *  	sub / \first
	 *  ```
	 **/
	@ $mol_mem
	First() {
		return (( obj )=>{
			obj.title = () => this.first_title()
			obj.sub = () => [ "first" ] as readonly any[]
			return obj
		})( new this.$.$mol_view(  ) )
	}

	/**
	 *  ```
	 *  first_title $ts_tutorial_divider title \first
	 *  ```
	 **/
	@ $mol_mem
	first_title() {
		return (( obj )=>{
			obj.title = () => "first"
			return obj
		})( new this.$.$ts_tutorial_divider(  ) )
	}

	/**
	 *  ```
	 *  Second $mol_view
	 *  	title <= second_title
	 *  	sub / \second
	 *  ```
	 **/
	@ $mol_mem
	Second() {
		return (( obj )=>{
			obj.title = () => this.second_title()
			obj.sub = () => [ "second" ] as readonly any[]
			return obj
		})( new this.$.$mol_view(  ) )
	}

	/**
	 *  ```
	 *  second_title $ts_tutorial_divider title \second
	 *  ```
	 **/
	@ $mol_mem
	second_title() {
		return (( obj )=>{
			obj.title = () => "second"
			return obj
		})( new this.$.$ts_tutorial_divider(  ) )
	}

	/**
	 *  ```
	 *  Third $mol_view
	 *  	title <= third_title
	 *  	sub / \third
	 *  ```
	 **/
	@ $mol_mem
	Third() {
		return (( obj )=>{
			obj.title = () => this.third_title()
			obj.sub = () => [ "third" ] as readonly any[]
			return obj
		})( new this.$.$mol_view(  ) )
	}

	/**
	 *  ```
	 *  third_title $ts_tutorial_divider title \third
	 *  ```
	 **/
	@ $mol_mem
	third_title() {
		return (( obj )=>{
			obj.title = () => "third"
			return obj
		})( new this.$.$ts_tutorial_divider(  ) )
	}

	/**
	 *  ```
	 *  Fourth $mol_view
	 *  ```
	 **/
	@ $mol_mem
	Fourth() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_view(  ) )
	}

} }

namespace $ { export class $ts_tutorial_divider extends $ts_numl {

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
	 *  title \
	 *  ```
	 **/
	title() {
		return ""
	}

	/**
	 *  ```
	 *  attr *
	 *  	content \start
	 *  	padding \top 5
	 *  	height \100%
	 *  	gap \1
	 *  	flow \column
	 *  ```
	 **/
	attr() {
		return ({
			"content" :  "start" ,
			"padding" :  "top 5" ,
			"height" :  "100%" ,
			"gap" :  "1" ,
			"flow" :  "column" ,
		})
	}

	/**
	 *  ```
	 *  sub /
	 *  	<= icon
	 *  	<= el_one
	 *  ```
	 **/
	sub() {
		return [ this.icon() , this.el_one() ] as readonly any[]
	}

	/**
	 *  ```
	 *  icon $ts_numl attr * name \align-justify
	 *  ```
	 **/
	@ $mol_mem
	icon() {
		return (( obj )=>{
			obj.attr = () => ({
			"name" :  "align-justify" ,
		})
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  el_one $ts_numl
	 *  	attr * transform \rotate(90deg)
	 *  	sub / <= title
	 *  ```
	 **/
	@ $mol_mem
	el_one() {
		return (( obj )=>{
			obj.attr = () => ({
			"transform" :  "rotate(90deg)" ,
		})
			obj.sub = () => [ this.title() ] as readonly any[]
			return obj
		})( new this.$.$ts_numl(  ) )
	}

} }

