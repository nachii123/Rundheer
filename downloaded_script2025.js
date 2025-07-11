import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 20 },
        { duration: '1m', target: 50 },
        { duration: '30s', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'],
    },
};

const authToken = 'Bearer ' + __ENV.API_TOKEN;

export default function() {
    sleep(Math.random() * 3);
    let resourceIds = {}; // Store created resource IDs

    // Test PUT https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/{dataverseID}
    let response0 = http.put(`https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/' + (resourceIds['dataverse'] || 'test-dataverse-' + __VU + '-' + __ITER) + '`, {"_$":{},"icon":"'sample_value'","universeWriteAccess":"'sample_value'","description":"'sample_value'","universeReadAccess":"'sample_value'"}, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
    });

    check(response0, {
        'PUT https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/{dataverseID} status is 2xx': (r) => r.status >= 200 && r.status < 300,
        'PUT https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/{dataverseID} response time < 500ms': (r) => r.timings.duration < 500,
    });

    // Test POST https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/metadata
    let response1 = http.post('https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/metadata', {"constructId":"'sample_value'","projections":{},"pageable.sort.sorted":Math.random() > 0.5,"pageable.unpaged":Math.random() > 0.5,"pageable.paged":Math.random() > 0.5,"pageable.sort.unsorted":Math.random() > 0.5,"_$":{},"pageable.pageNumber":72,"ownedOnly":Math.random() > 0.5,"pageable.pageSize":615,"pageable.sort.empty":Math.random() > 0.5,"pageable.offset":264}, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        },
        params: {"pageable":{}}
    });

    check(response1, {
        'POST https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/metadata status is 2xx': (r) => r.status >= 200 && r.status < 300,
        'POST https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/metadata response time < 500ms': (r) => r.timings.duration < 500,
        'Has resource ID': (r) => {
            if (r.status >= 200 && r.status < 300) {
                try {
                    const body = JSON.parse(r.body);
                    const id = body.id || body.data?.id || body.result?.id;
                    if (id) resourceIds['metadata'] = id;
                    return !!id;
                } catch (e) {
                    return false;
                }
            }
            return true;
        },
    });

    // Test GET https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/{dataverseID}
    let response2 = http.get(`https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/' + (resourceIds['dataverse'] || 'test-dataverse-' + __VU + '-' + __ITER) + '`, null, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
    });

    check(response2, {
        'GET https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/{dataverseID} status is 2xx': (r) => r.status >= 200 && r.status < 300,
        'GET https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/{dataverseID} response time < 500ms': (r) => r.timings.duration < 500,
    });

    // Test POST https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses
    let response3 = http.post('https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses', {"visibility":"'sample_value'","_$":{},"name":"'sample_value'","universeWriteAccess":"'sample_value'","description":"'sample_value'","universeReadAccess":"'sample_value'","tags":{}}, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
    });

    check(response3, {
        'POST https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses status is 2xx': (r) => r.status >= 200 && r.status < 300,
        'POST https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses response time < 500ms': (r) => r.timings.duration < 500,
        'Has resource ID': (r) => {
            if (r.status >= 200 && r.status < 300) {
                try {
                    const body = JSON.parse(r.body);
                    const id = body.id || body.data?.id || body.result?.id;
                    if (id) resourceIds['dataverse'] = id;
                    return !!id;
                } catch (e) {
                    return false;
                }
            }
            return true;
        },
    });

    // Test DELETE https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/{dataverseID}
    let response4 = http.del(`https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/' + (resourceIds['dataverse'] || 'test-dataverse-' + __VU + '-' + __ITER) + '`, null, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
    });

    check(response4, {
        'DELETE https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/{dataverseID} status is 2xx': (r) => r.status >= 200 && r.status < 300,
        'DELETE https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/{dataverseID} response time < 500ms': (r) => r.timings.duration < 500,
    });

    // Test POST https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/usages
    let response5 = http.post('https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/usages', {"showIds":Math.random() > 0.5,"ownedOnly":Math.random() > 0.5,"_$":{}}, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
    });

    check(response5, {
        'POST https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/usages status is 2xx': (r) => r.status >= 200 && r.status < 300,
        'POST https://ig.aidtaas.com/pi-dataverse-service/v1.0/dataverses/usages response time < 500ms': (r) => r.timings.duration < 500,
        'Has resource ID': (r) => {
            if (r.status >= 200 && r.status < 300) {
                try {
                    const body = JSON.parse(r.body);
                    const id = body.id || body.data?.id || body.result?.id;
                    if (id) resourceIds['usage'] = id;
                    return !!id;
                } catch (e) {
                    return false;
                }
            }
            return true;
        },
    });
}