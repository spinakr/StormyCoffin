// const serviceBase = 'policychange/';

// const commit = (policyId, exposureId, request) => {
//   return new Promise((resolve, reject) => {
//     let params = { policyId: policyId, exposureId: exposureId };
//     const url = buildUrl(serviceBase + 'commit', params);
//     fetch(url, { method: 'POST', body: JSON.stringify(request), headers: { 'Content-Type': 'application/json' } }).then((response) => {
//       if (response.ok) {
//         response.text().then(resolve);
//       } else {
//         reject('failed to commit changes: ' + response.statusText);
//       }
//     });
//   });
// }

// export { commit };
