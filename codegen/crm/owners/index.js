/**
 * CRM Owners
 * HubSpot uses **owners** to assign CRM objects to specific people in your organization. The endpoints described here are used to get a list of the owners that are available for an account. To assign an owner to an object, set the hubspot_owner_id property using the appropriate CRM object update or create a request.  If teams are available for your HubSpot tier, these endpoints will also indicate which team an owner belongs to. Team membership can be one of PRIMARY (default), SECONDARY, or CHILD.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CollectionResponsePublicOwner', 'model/Error', 'model/ErrorDetail', 'model/NextPage', 'model/Paging', 'model/PublicOwner', 'model/PublicTeam', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/CollectionResponsePublicOwner'), require('./model/Error'), require('./model/ErrorDetail'), require('./model/NextPage'), require('./model/Paging'), require('./model/PublicOwner'), require('./model/PublicTeam'), require('./api/DefaultApi'));
  }
}(function(ApiClient, CollectionResponsePublicOwner, Error, ErrorDetail, NextPage, Paging, PublicOwner, PublicTeam, DefaultApi) {
  'use strict';

  /**
   * HubSpot_uses_owners_to_assign_CRM_objects_to_specific_people_in_your_organization__The_endpoints_described_here_are_used_to_get_a_list_of_the_owners_that_are_available_for_an_account__To_assign_an_owner_to_an_object_set_the_hubspot_owner_id_property_using_the_appropriate_CRM_object_update_or_create_a_request_If_teams_are_available_for_your_HubSpot_tier_these_endpoints_will_also_indicate_which_team_an_owner_belongs_to__Team_membership_can_be_one_of_PRIMARY__default_SECONDARY_or_CHILD_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CrmOwners = require('index'); // See note below*.
   * var xxxSvc = new CrmOwners.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CrmOwners.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CrmOwners.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CrmOwners.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v3
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The CollectionResponsePublicOwner model constructor.
     * @property {module:model/CollectionResponsePublicOwner}
     */
    CollectionResponsePublicOwner: CollectionResponsePublicOwner,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorDetail model constructor.
     * @property {module:model/ErrorDetail}
     */
    ErrorDetail: ErrorDetail,
    /**
     * The NextPage model constructor.
     * @property {module:model/NextPage}
     */
    NextPage: NextPage,
    /**
     * The Paging model constructor.
     * @property {module:model/Paging}
     */
    Paging: Paging,
    /**
     * The PublicOwner model constructor.
     * @property {module:model/PublicOwner}
     */
    PublicOwner: PublicOwner,
    /**
     * The PublicTeam model constructor.
     * @property {module:model/PublicTeam}
     */
    PublicTeam: PublicTeam,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));