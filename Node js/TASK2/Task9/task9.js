const fs = require('fs').promises;

async function fetchRemoteData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const remoteData = [
                { id: 1, value: 'A' },
                { id: 2, value: 'B' }
            ];
            console.log(`Remote fetched: ${remoteData.length} records`);
            resolve(remoteData);
        }, 600);
    });
}
async function fetchLocalData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const localData = [
                { id: 2, value: 'Local-B' }, // Conflict with remote id:2
                { id: 3, value: 'C' }
            ];
            console.log(`Local fetched: ${localData.length} records`);
            resolve(localData);
        }, 400);
    });
}

async function syncData(remote, local) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const map = new Map();
            local.forEach(item => map.set(item.id, item));
            let conflictCount = 0;
            remote.forEach(item => {
                if (map.has(item.id)) conflictCount++;
                map.set(item.id, item); // Remote overwrites local
            });
            const merged = Array.from(map.values());
            console.log(`Synced: ${merged.length} records (${conflictCount} conflict resolved)`);
            resolve(merged);
        }, 300);
    });
}

async function saveResult(data) {
    return new Promise(async (resolve, reject) => {
        setTimeout(async () => {
            try {
                await fs.writeFile('sync.json', JSON.stringify(data, null, 2));
                console.log('Saved to sync.json');
                resolve();
            } catch (err) {
                reject(err);
            }
        }, 200);
    });
}

async function runPipeline() {
    try {
        
        const [remoteData, localData] = await Promise.all([fetchRemoteData(), fetchLocalData()]);
        const syncedData = await syncData(remoteData, localData);
        await saveResult(syncedData);
    } catch (err) {
        console.error('Error in pipeline:', err);
    }
}

runPipeline();
