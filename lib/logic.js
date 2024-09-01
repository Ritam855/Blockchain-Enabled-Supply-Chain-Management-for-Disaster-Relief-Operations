/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */




/**
 * Initiate request from one trader to another
 * @param {org.dro.network.Initiaterequest} Initiaterequest - the Initiaterequest is to be processed
 * @transaction
*/

function initiatereliefrequest(Initiaterequest) 
{
	console.log('Start of Initiaterequest Function');
	var factory = getFactory();
	var NS = 'org.dro.network';

	var order = factory.newResource(NS, 'request', Initiaterequest.orderId);
    order.itemname = Initiaterequest.itemname;
	order.orderer = Initiaterequest.orderer;
	order.vendor = Initiaterequest.vendor;
 
	return getAssetRegistry(order.getFullyQualifiedType()).then(function (assetRegistry) {
		return assetRegistry.add(order);
  	});
  	
 }

/**
 * @param {org.dro.network.Transferreliefitem} trade - the Initiaterequest is to be processed
 * @transaction
*/

function transferreliefitem(trade) 
{
	console.log('Start function transfer reliefitem');
	var NS = 'org.dro.network';
  	var me = getCurrentParticipant();
    
    trade.reliefitem.issuer = trade.issuer;
	trade.reliefitem.owner = trade.newOwner;
    trade.reliefitem.ownername=trade.newownername;


	return getAssetRegistry('org.dro.network.reliefitem').then(function (assetRegistry) 
    {

		return assetRegistry.update(trade.reliefitem);
 
	});
}

