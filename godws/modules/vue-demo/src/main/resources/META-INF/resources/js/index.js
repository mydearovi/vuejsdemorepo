//
// We are using the runtime + compiler module in this case so that we don't need
// to process templates during build time.
//
// See https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
// for more information.
//
import Vue from 'vue/dist/vue.common';
import {call} from './controller/call';


module.exports = {
		call
	};