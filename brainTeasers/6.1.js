/*
 * You have 20 bottles of pills. 19 bottles have 1.0 gram pills,
 * but one has pills of weight 1.1 grams. Given a scale that
 * provides an exact measurement, how would you find the heavy
 * bottle? You can only use the scale once.
*/


/*
 * Notes from Solution:
 *
 * Imagine if we had only two bottles instead of 20. One had 1.0g
 * pills, one had 1.1g. If we took one pill from each and weighed
 * them, it would equal 2.1, but we still wouldn't know which was
 * heavier. How much would it weigh if we took 1 pill from one bottle
 * and two pills from the second bottle? Either 3.1 or 3.2, depending
 * on which was heavier. We can apply this process to the 20 bottle
 * problem and use the overage to determine which pill is heaviest.
*/
