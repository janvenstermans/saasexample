/*
 * Browser Policies
 * Browser policy customizations.
 * Documentation: https://atmospherejs.com/meteor/browser-policy
 */

customBrowserPolicies = function() {
  BrowserPolicy.content.allowImageOrigin("*.twimg.com");
  BrowserPolicy.content.allowOriginForAll("*.inspectlet.com");
  BrowserPolicy.content.allowOriginForAll("*.mxpnl.com");
}