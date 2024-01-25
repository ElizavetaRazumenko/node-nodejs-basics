// let's create a couple of variables to test the function's operation
process.env.RSS_VAR1 = "value1";
process.env.RSS_VAR2 = "value2";
process.env.RSS_VAR3 = "value3";

const parseEnv = () => {
  const envVars = process.env;
  const result = [];

  for (const envKey of Object.keys(envVars)) {
    if (envKey.startsWith("RSS_")) {
      result.push(`${envKey}=${envVars[envKey]}`);
    }
  }

  console.log(result.join("; "));
};

parseEnv();
