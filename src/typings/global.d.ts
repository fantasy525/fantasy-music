declare module global{
	let WINDOW_WIDTH:number
	let WINDOW_HEIGHT:number
	let dp:(px:number)=>number;
	let getDp:(px:number)=>number;
	let font:(px:number)=>number;
	let noop:()=>void
	let statusBarHeight:number|undefined;
}
declare var WINDOW_WIDTH
declare var WINDOW_HEIGHT
declare function font(px:number):number;
declare function dp(px:number):number;
declare var statusBarHeight:number
declare function noop():void;