namespace $ { export class $ts_tutorial extends $mol_view {

	/**
	 *  ```
	 *  sub / <= block_layout
	 *  ```
	 **/
	sub() {
		return [ this.block_layout() ] as readonly any[]
	}

	/**
	 *  ```
	 *  block_layout $ts_tutorial_layout items <= grid
	 *  ```
	 **/
	@ $mol_mem
	block_layout() {
		return (( obj )=>{
			obj.items = () => this.grid()
			return obj
		})( new this.$.$ts_tutorial_layout(  ) )
	}

	/**
	 *  ```
	 *  grid $ts_numl
	 *  	attr *
	 *  		rows \ 80px 1fr auto
	 *  		width \100%
	 *  		height \100%
	 *  	sub /
	 *  		<= Header
	 *  		<= Body
	 *  ```
	 **/
	@ $mol_mem
	grid() {
		return (( obj )=>{
			obj.attr = () => ({
			"rows" :  " 80px 1fr auto" ,
			"width" :  "100%" ,
			"height" :  "100%" ,
		})
			obj.sub = () => [ this.Header() , this.Body() ] as readonly any[]
			return obj
		})( new this.$.$ts_numl(  ) )
	}

	/**
	 *  ```
	 *  Header $ts_tutorial_header
	 *  ```
	 **/
	@ $mol_mem
	Header() {
		return (( obj )=>{
			return obj
		})( new this.$.$ts_tutorial_header(  ) )
	}

	/**
	 *  ```
	 *  Body $ts_tutorial_body
	 *  ```
	 **/
	@ $mol_mem
	Body() {
		return (( obj )=>{
			return obj
		})( new this.$.$ts_tutorial_body(  ) )
	}

} }

