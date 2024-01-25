const parseEnv = () => {
    const envVars = process.env;
    for (const envKey of Object.keys(envVars)) {
        if (envKey.startsWith('RSS_')) {
            console.log(`${envKey}=${envVars[envKey]}`);
        }
    }
};

parseEnv();