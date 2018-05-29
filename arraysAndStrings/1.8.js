/*
 * Assume you have a method isSubstring which checks if one
 * word is a substring of another. Given two strings, s1 and
 * s2, write code to check if s2 is a rotation of s1 using
 * only one call to isSubstring.
 *
 * EXAMPLE:
 * 'waterbottle' is a rotation of 'erbottlewat'
*/

// given helper function

const isSubstring = (s1, s2) => (
  s1.includes(s2)
);


// implentation

const isRotation = (s1, s2) => {
  return isSubstring(s1 + s1, s2);
};


/*
 * Notes from Solution:
 *
 * A rotation is always split into two parts.
 *
 * EX:
 * s1 = 'waterbottle'
 * x = 'wat'
 * y = 'erbottle'
 * s2 = 'erbottlewat'
 *
 * Since s1 is comprised of xy and s2 is comprised of yx,
 * if we repeat s1 (so that it is xyxy), that s1s1 will
 * always contain the rotated string (yx). We can make a
 * single call without ever having to find the rotation
 * point.
*/
