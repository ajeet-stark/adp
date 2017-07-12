/*
Copyright © 2015-2016 ADP, LLC.

Licensed under the Apache License, Version 2.0 (the “License”);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an “AS IS” BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.  See the License for the specific language
governing permissions and limitations under the License.
*/

'use strict';

module.exports = {
	products: [
		{
			productName: 'UserInfo',
			calls: [
				{
					method: 'GET',
					path: '/core/v1/userinfo',
					canonicalUri: 'profile',
					methodName: 'read'
				}
			]
		},
		{
			productName: 'Worker',
			notificationCanonicals: [
				'hr/workerInformationManagement/workerManagement/associateManagement/worker.legalName.change.notification',
				'hr/workerInformationManagement/workerManagement/addressManagement/worker.legalAddress.change.notification'
			],
			calls: [
				{
					method: 'GET',
					path: '/hr/v2/workers/{associateoid}',
					canonicalUri: 'hr/workerInformationManagement/workerManagement/associateManagement/worker.read',
					methodName: 'read'
				},
				{
					method: 'POST',
					path: '/events/hr/v1/worker.legal-name.change',
					metaPath: '/events/hr/v1/worker.legal-name.change/meta',
					tmpMeta: 'worker.legal.name.change.meta',
					canonicalUri: 'hr/workerInformationManagement/workerManagement/associateManagement/worker.legalName.change',
					schemaName: 'events_hr.worker.legalName.change_schema_v01_00_rev004',
					methodName: 'legalNameChange'
				},
				{
					method: 'POST',
					path: '/events/hr/v1/worker.legal-address.change',
					metaPath: '/events/hr/v1/worker.legal-address.change/meta',
					canonicalUri: 'hr/workerInformationManagement/workerManagement/addressManagement/worker.legalAddress.change',
					schemaName: 'events_hr.worker.legalAddress.change_schema_v01_00_rev004',
					methodName: 'legalAddressChange'
				},
				{
					method: 'POST',
					path: '/events/payroll/v1/worker.pay-distribution.change',
					metaPath: '/events/payroll/v1/worker.pay-distribution.change/meta',
					canonicalUri: 'payroll/payrollManagement/payrollInstructionManagement/payDistributionManagement/worker.payDistribution.change',
					schemaName: 'events_payroll.worker.payDistribution.change_schema_v01_00_rev007',
					methodName: 'payDistributionChange'
				},
				{
					method: 'GET',
					path: '/payroll/v2/workers/{associateoid}/pay-distributions',
					canonicalUri: 'payroll/payrollManagement/payrollInstructionManagement/payDistributionManagement/worker.payDistribution.read',
					methodName: 'readPayDistribution'
				}

			]
		}
	]
};
