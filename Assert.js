/*
 * Copyright 2015 ismail durmaz https://github.com/ismaildurmaz
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Assert = {
	/**
	 * @private
	 * @param value
	 * @param typeName
	 * @returns {boolean}
	 * @private
	 */
	_isType: function ( value, typeName ) {
		return Object.prototype.toString.apply( value ) === '[object ' + typeName + ']';
	},

	errorHandler: function ( obj ) {
		var msg = 'Message : ' + obj.message + '\n' +
		          'Expected : ' + obj.expected + '\n' +
		          'Current : ' + obj.current;
		// maybe better
		alert( msg );
		throw msg;
	},

	/**
	 * @private
	 * if value is false, Assertion throws @param message
	 * @param value
	 * @param message
	 * @param expected
	 * @param current
	 */
	handleAssert: function ( value, message, expected, current ) {
		if ( !value ) {
			Assert.errorHandler( {message: message, expected: expected, current: current} );
		}
	},

	isTrue: function ( value, message ) {
		return Assert.handleAssert( value === true, message, true, value );
	},

	isEqual: function ( value, target, message ) {
		return Assert.handleAssert( value == target, message, target, value );
	},

	isNotEqual: function ( value, target, message ) {
		return Assert.handleAssert( value != target, message, 'NOT(' + target + ')', value );
	},

	isNull: function ( value, message ) {
		return Assert.handleAssert( value === null, message, null, value );
	},

	isNotNull: function ( value, message ) {
		return Assert.handleAssert( value !== null, message, 'notNull', value );
	},

	isNotEmpty: function ( value, message ) {
		if ( Assert._isArray( value ) || Assert._isString( value ) ) {
			return Assert.handleAssert( value.length > 0, message, 'empty', value.length );
		} else {
			Assert.handleAssert( false, "Invalid type for isNotEmpty -> " + value.prototype.toString() );
		}
		return Assert.handleAssert( value === null, message );
	},

	isEmpty: function ( value, message ) {
		if ( Assert._isArray( value ) || Assert._isString( value ) ) {
			return Assert.handleAssert( value.length == 0, message, 'empty', value );
		} else {
			Assert.handleAssert( false, "Invalid type for isEmpty -> " + value.prototype.toString() );
		}
		return Assert.handleAssert( value === null, message );
	},

	isGreater: function ( value, condition, message ) {
		return Assert.handleAssert( value > condition, message, '[' + condition + ' < x]', value );
	},

	isGreaterEqual: function ( value, condition, message ) {
		return Assert.handleAssert( value >= condition, message, '[' + condition + ' <= x]', value );
	},

	isLower: function ( value, condition, message ) {
		return Assert.handleAssert( value < condition, message, '[' + condition + ' > x]', value );
	},

	isLowerEqual: function ( value, condition, message ) {
		return Assert.handleAssert( value <= condition, message, '[' + value + ' >= x]', value );
	},

	isFalse: function ( value, message ) {
		return Assert.handleAssert( value === false, message, false, value );
	},

	/**
	 * @private
	 * @param value
	 * @param typeName
	 * @returns {boolean}
	 * @private
	 */
	_isNumber: function ( value ) {
		return Assert._isType( value, 'Number' );
	},

	isNumber: function ( value, message ) {
		return Assert.handleAssert( Assert._isNumber( value ), message, '[NUMBER]', value );
	},

	/**
	 * @private
	 * @param value
	 * @param typeName
	 * @returns {boolean}
	 * @private
	 */
	_isString: function ( value ) {
		return Assert._isType( value, 'String' );
	},

	isString: function ( value, message ) {
		return Assert.handleAssert( Assert._isString( value ), message, '[STRING]', value );
	},

	/**
	 * @private
	 * @param value
	 * @param typeName
	 * @returns {boolean}
	 * @private
	 */
	_isArray: function ( value, message ) {
		return Assert._isType( value, 'Array' );
	},

	isArray: function ( value, message ) {
		return Assert.handleAssert( Assert._isArray( value ), message, '[ARRAY]', value );
	},

	/**
	 * @private
	 * @param value
	 * @param typeName
	 * @returns {boolean}
	 * @private
	 */
	_isDate: function ( value, message ) {
		return Assert._isType( value, 'Date' );
	},

	isDate: function ( value, message ) {
		return Assert.handleAssert( Assert._isDate( value ), message, '[DATE]', value );
	},

	/**
	 * @private
	 * @param value
	 * @param typeName
	 * @returns {boolean}
	 * @private
	 */
	_isDefined: function ( value, message ) {
		return typeof value !== "undefined";
	},

	isDefined: function ( value, message ) {
		return Assert.handleAssert( Assert._isDefined( value ), message, '[DEFINED]', value );
	},

	/**
	 * @private
	 * @param value
	 * @param typeName
	 * @returns {boolean}
	 * @private
	 */
	_isUndefined: function ( value, message ) {
		return typeof value === "undefined";
	},

	isUndefined: function ( value, message ) {
		return Assert.handleAssert( Assert._isUndefined( value ), message, '[UNDEFINED]', value );
	},

	validateEmail: function ( value, message ) {
		return Assert.validateRegex( value, /\S+@\S+\.\S+/, message );
	},

	validateRegex: function ( value, regex, message ) {
		return Assert.handleAssert( regex.test( value ), message, 'REGEX[' + regex + ']', value );
	}
};