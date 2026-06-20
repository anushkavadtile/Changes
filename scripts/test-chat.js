// Using native fetch (Node 18+)

async function testPort(port) {
    const url = `http://localhost:${port}/api/chat`;
    console.log(`\n🔍 Checking Port ${port}...`);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "Test" })
        });

        if (response.status === 404) {
            console.log(`❌ Port ${port}: 404 Not Found`);
            return false;
        }

        console.log(`✅ Port ${port}: Connected! (Status: ${response.status})`);
        const data = await response.json();
        console.log('Response:', JSON.stringify(data, null, 2));
        return true;
    } catch (e) {
        if (e.cause && e.cause.code === 'ECONNREFUSED') {
            console.log(`❌ Port ${port}: Connection Refused`);
        } else {
            console.log(`❌ Port ${port}: Error - ${e.message}`);
        }
        return false;
    }
}

async function run() {
    for (const port of [3000, 3001, 3002, 8080]) {
        if (await testPort(port)) break;
    }
}

run();
