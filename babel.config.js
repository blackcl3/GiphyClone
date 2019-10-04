const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "44",
                firefox: "68.1.0",
                chrome: "77",
                safari: "12.1",
            },
            useBuiltIns: "usage",
        },
    ],
];

module.exports = { presets };