var schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "version": "fy2018",
    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans",
    "name": "/",
    "title": "DCOI Strategic Plan Schema version fy2018",
    "description": "Schema definition for the collection of the CFO Act agencies' DCOI Strategic Plans",
    "type": "object",
    "required": [
        "optimizationMetrics",
        "tieredClosures",
        "nontieredClosures",
        "costSavings"
    ],
    "properties": {
        "optimizationMetrics": {
            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics",
            "name": "OptimizationMetrics",
            "title": "Optimization metrics",
            "description": "The set of DCOI optimization metrics",
            "type": "object",
            "required": [
                "facilityUtilization",
                "energyMetering",
                "pue",
                "virtualization",
                "tieredServerUtAutoMonitoring",
                "nontieredServerUtAutoMonitoring"
            ],
            "properties": {
                "facilityUtilization": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/facilityUtilization",
                    "name": "facilityUtilization",
                    "description": "Targets for a given agency for each fiscal year in the facility utilization optimization metric",
                    "title": "facility utilization",
                    "type": "object",
                    "required": [
                        "fy16Planned", "fy16Achieved", "fy17Planned", "fy17Achieved", "fy18Planned", "fy18Achieved",
                        "stepsForAchievingPlannedValues"
                    ],
                    "properties": {
                        "fy18OMBtarget": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/facilityUtilization/fy18OMBTarget",
                            "name": "fy18OMBtarget",
                            "title": "fy18OMBTarget",
                            "description": "Value agency must reach by the end of fy 2018 in the given optimization metric",
                            "type": "number",
                            "minimum": 80.00,
                            "maximum": 80.00
                        },
                        "fy16Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/facilityUtilization/fy16Planned",
                            "name": "fy16Planned",
                            "title": "fy16Planned",
                            "description": "Value agency plans to reach by the end of FY 16 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy16Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/facilityUtilization/fy16Achieved",
                            "name": "fy16Achieved",
                            "title": "fy16Achieved",
                            "description": "Value agency achieved by the end of FY 16 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy17Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/facilityUtilization/fy17Planned",
                            "name": "fy17Planned",
                            "title": "fy17Planned",
                            "description": "Value agency plans to reach by the end of FY 17 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy17Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/facilityUtilization/fy17Achieved",
                            "name": "fy17Achieved",
                            "title": "fy17Achieved",
                            "description": "Value agency achieved by the end of FY 17 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy18Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/facilityUtilization/fy18Planned",
                            "name": "fy18Planned",
                            "title": "fy18Planned",
                            "description": "Value agency plans to achieve by the end of FY 18 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy18Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/facilityUtilization/fy18Achieved",
                            "name": "fy18Achieved",
                            "title": "fy18Achieved",
                            "description": "Value agency achieved by the end of FY 18 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "stepsForAchievingPlannedValues": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/facilityUtilization/stepsForAchievingPlannedValues",
                            "name": "fy16Planned",
                            "title": "fy16Planned",
                            "description": "How the agency plans to reach its targets in the given optimization metric",
                            "type": "string",
                            "minLength": 200,
                            "maxLength": 10000
                        },
                        "explanationForUnmetPlannedValues": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/facilityUtilization/explanationForUnmetPlannedValue",
                            "name": "explanationForUnmetPlannedValues",
                            "title": "explanationForUnmetPlannedValue",
                            "description": "Explanation for why the agency did not meet its targets in the given optimization metric",
                            "type": "string",
                            "minLength": 0,
                            "maxLength": 10000
                        }
                    }
                },
                "energyMetering": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/energyMetering",
                    "name": "energyMetering",
                    "description": "Targets for a given agency for each fiscal year in the facility utilization optimization metric",
                    "title": "energyMetering",
                    "type": "object",
                    "required": [
                        "fy16Planned", "fy16Achieved", "fy17Planned", "fy17Achieved", "fy18Planned", "fy18Achieved",
                        "stepsForAchievingPlannedValues"
                    ],
                    "properties": {
                        "fy18OMBtarget": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/energyMetering/fy18OMBTarget",
                            "name": "fy18OMBtarget",
                            "title": "fy18OMBTarget",
                            "description": "Value agency must reach by the end of fy 2018 in the given optimization metric",
                            "type": "number",
                            "minimum": 100.00,
                            "maximum": 100.00
                        },
                        "fy16Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/energyMetering/fy16Planned",
                            "name": "fy16Planned",
                            "title": "fy16Planned",
                            "description": "Value agency plans to reach by the end of FY 16 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy16Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/energyMetering/fy16Achieved",
                            "name": "fy16Achieved",
                            "title": "fy16Achieved",
                            "description": "Value agency achieved by the end of FY 16 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy17Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/energyMetering/fy17Planned",
                            "name": "fy17Planned",
                            "title": "fy17Planned",
                            "description": "Value agency plans to reach by the end of FY 17 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy17Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/energyMetering/fy17Achieved",
                            "name": "fy17Achieved",
                            "title": "fy17Achieved",
                            "description": "Value agency achieved by the end of FY 17 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy18Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/energyMetering/fy18Planned",
                            "name": "fy18Planned",
                            "title": "fy18Planned",
                            "description": "Value agency plans to achieve by the end of FY 18 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy18Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/energyMetering/fy18Achieved",
                            "name": "fy18Achieved",
                            "title": "fy18Achieved",
                            "description": "Value agency achieved by the end of FY 18 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "stepsForAchievingPlannedValues": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/energyMetering/stepsForAchievingPlannedValues",
                            "name": "fy16Planned",
                            "title": "fy16Planned",
                            "description": "How the agency plans to reach their targets in the given optimization metric",
                            "type": "string",
                            "minLength": 200,
                            "maxLength": 10000
                        },
                        "explanationForUnmetPlannedValues": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/energyMetering/explanationForUnmetPlannedValue",
                            "name": "explanationForUnmetPlannedValues",
                            "title": "explanationForUnmetPlannedValue",
                            "description": "Explanation for an unmet target in the given optimization metric",
                            "type": "string",
                            "minLength": 0,
                            "maxLength": 10000
                        }
                    }
                },
                "pue": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/pue/",
                    "name": "pue",
                    "description": "Targets for a given agency for each fiscal year in the pue optimization metric",
                    "title": "pue",
                    "type": "object",
                    "required": [
                        "fy16Planned", "fy16Achieved", "fy17Planned", "fy17Achieved", "fy18Planned", "fy18Achieved",
                        "stepsForAchievingPlannedValues"
                    ],
                    "properties": {
                        "fy18OMBtarget": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/pue/fy18OMBTarget",
                            "name": "fy18OMBtarget",
                            "title": "fy18OMBTarget",
                            "description": "Value agency must reach by the end of fy 2018 in the given optimization metric",
                            "type": "number",
                            "minimum": 1.40,
                            "maximum": 1.50
                        },
                        "fy16Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/pue/fy16Planned",
                            "name": "fy16Planned",
                            "title": "fy16Planned",
                            "description": "Value agency plans to reach by the end of FY 16 in the given optimization metric",
                            "type": "number",
                            "minimum": 1,
                            "maximum": 5.00
                        },
                        "fy16Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/pue/fy16Achieved",
                            "name": "fy16Achieved",
                            "title": "fy16Achieved",
                            "description": "Value agency achieved by the end of FY 16 in the given optimization metric",
                            "type": "number",
                            "minimum": 1,
                            "maximum": 5.00
                        },
                        "fy17Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/pue/fy17Planned",
                            "name": "fy17Planned",
                            "title": "fy17Planned",
                            "description": "Value agency plans to reach by the end of FY 17 in the given optimization metric",
                            "type": "number",
                            "minimum": 1,
                            "maximum": 5.00
                        },
                        "fy17Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/pue/fy17Achieved",
                            "name": "fy17Achieved",
                            "title": "fy17Achieved",
                            "description": "Value agency achieved by the end of FY 17 in the given optimization metric",
                            "type": "number",
                            "minimum": 1,
                            "maximum": 5.00
                        },
                        "fy18Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/pue/fy18Planned",
                            "name": "fy18Planned",
                            "title": "fy18Planned",
                            "description": "Value agency plans to achieve by the end of FY 18 in the given optimization metric",
                            "type": "number",
                            "minimum": 1,
                            "maximum": 5.00
                        },
                        "fy18Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/pue/fy18Achieved",
                            "name": "fy18Achieved",
                            "title": "fy18Achieved",
                            "description": "Value agency achieved by the end of FY 18 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 5.00
                        },
                        "stepsForAchievingPlannedValues": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/pue/stepsForAchievingPlannedValues",
                            "name": "fy16Planned",
                            "title": "fy16Planned",
                            "description": "How the agency plans to reach their targets in the given optimization metric",
                            "type": "string",
                            "minLength": 200,
                            "maxLength": 10000
                        },
                        "explanationForUnmetPlannedValues": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/pue/explanationForUnmetPlannedValue",
                            "name": "explanationForUnmetPlannedValues",
                            "title": "explanationForUnmetPlannedValue",
                            "description": "Explanation for an unmet target in the given optimization metric",
                            "type": "string",
                            "minLength": 0,
                            "maxLength": 10000
                        }
                    }
                },
                "virtualization": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/virtualization",
                    "name": "virtualization",
                    "description": "Targets for a given agency for each fiscal year in the virtualization optimization metric",
                    "title": "virtualization",
                    "type": "object",
                    "required": [
                        "fy16Planned", "fy16Achieved", "fy17Planned", "fy17Achieved", "fy18Planned", "fy18Achieved",
                        "stepsForAchievingPlannedValues"
                    ],
                    "properties": {
                        "fy18OMBtarget": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/virtualization/fy18OMBTarget",
                            "name": "fy18OMBtarget",
                            "title": "fy18OMBTarget",
                            "description": "Value agency must reach by the end of fy 2018 in the given optimization metric",
                            "type": "number",
                            "minimum": 4.00,
                            "maximum": 4.00
                        },
                        "fy16Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/virtualization/fy16Planned",
                            "name": "fy16Planned",
                            "title": "fy16Planned",
                            "description": "Value agency plans to reach by the end of FY 16 in the given optimization metric",
                            "type": "number",
                            "minimum": 1,
                            "maximum": 50.00
                        },
                        "fy16Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/virtualization/fy16Achieved",
                            "name": "fy16Achieved",
                            "title": "fy16Achieved",
                            "description": "Value agency achieved by the end of FY 16 in the given optimization metric",
                            "type": "number",
                            "minimum": 1,
                            "maximum": 50.00
                        },
                        "fy17Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/virtualization/fy17Planned",
                            "name": "fy17Planned",
                            "title": "fy17Planned",
                            "description": "Value agency plans to reach by the end of FY 17 in the given optimization metric",
                            "type": "number",
                            "minimum": 1,
                            "maximum": 50.00
                        },
                        "fy17Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/virtualization/fy17Achieved",
                            "name": "fy17Achieved",
                            "title": "fy17Achieved",
                            "description": "Value agency achieved by the end of FY 17 in the given optimization metric",
                            "type": "number",
                            "minimum": 1,
                            "maximum": 50.00
                        },
                        "fy18Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/virtualization/fy18Planned",
                            "name": "fy18Planned",
                            "title": "fy18Planned",
                            "description": "Value agency plans to achieve by the end of FY 18 in the given optimization metric",
                            "type": "number",
                            "minimum": 1,
                            "maximum": 50.00
                        },
                        "fy18Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/virtualization/fy18Achieved",
                            "name": "fy18Achieved",
                            "title": "fy18Achieved",
                            "description": "Value agency achieved by the end of FY 18 in the given optimization metric",
                            "type": "number",
                            "minimum": 1,
                            "maximum": 50.00
                        },
                        "stepsForAchievingPlannedValues": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/virtualization/stepsForAchievingPlannedValues",
                            "name": "fy16Planned",
                            "title": "fy16Planned",
                            "description": "How the agency plans to reach their targets in the given optimization metric",
                            "type": "string",
                            "minLength": 200,
                            "maxLength": 10000
                        },
                        "explanationForUnmetPlannedValues": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/virtualization/explanationForUnmetPlannedValue",
                            "name": "explanationForUnmetPlannedValues",
                            "title": "explanationForUnmetPlannedValue",
                            "description": "Explanation for an unmet target in the given optimization metric",
                            "type": "string",
                            "minLength": 0,
                            "maxLength": 10000
                        }
                    }
                },
                "tieredServerUtAutoMonitoring": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/tieredServerUtAutoMonitoring",
                    "name": "tieredServerUtAutoMonitoring",
                    "description": "Targets for a given agency for each fiscal year in the tiered Server Utilization and Automated Monitoring optimization metric",
                    "title": "tieredServerUtAutoMonitoring",
                    "type": "object",
                    "required": [
                        "fy16Planned", "fy16Achieved", "fy17Planned", "fy17Achieved", "fy18Planned", "fy18Achieved",
                        "stepsForAchievingPlannedValues"
                    ],
                    "properties": {
                        "fy18OMBtarget": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/tieredServerUtAutoMonitoring/fy18OMBTarget",
                            "name": "fy18OMBtarget",
                            "title": "fy18OMBTarget",
                            "description": "Value agency must reach by the end of fy 2018 in the given optimization metric",
                            "type": "number",
                            "minimum": 65.00,
                            "maximum": 65.00
                        },
                        "fy16Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/tieredServerUtAutoMonitoring/fy16Planned",
                            "name": "fy16Planned",
                            "title": "fy16Planned",
                            "description": "Value agency plans to reach by the end of FY 16 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy16Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/tieredServerUtAutoMonitoring/fy16Achieved",
                            "name": "fy16Achieved",
                            "title": "fy16Achieved",
                            "description": "Value agency achieved by the end of FY 16 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy17Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/tieredServerUtAutoMonitoring/fy17Planned",
                            "name": "fy17Planned",
                            "title": "fy17Planned",
                            "description": "Value agency plans to reach by the end of FY 17 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy17Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/tieredServerUtAutoMonitoring/fy17Achieved",
                            "name": "fy17Achieved",
                            "title": "fy17Achieved",
                            "description": "Value agency achieved by the end of FY 17 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy18Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/tieredServerUtAutoMonitoring/fy18Planned",
                            "name": "fy18Planned",
                            "title": "fy18Planned",
                            "description": "Value agency plans to achieve by the end of FY 18 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy18Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/tieredServerUtAutoMonitoring/fy18Achieved",
                            "name": "fy18Achieved",
                            "title": "fy18Achieved",
                            "description": "Value agency achieved by the end of FY 18 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "stepsForAchievingPlannedValues": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/tieredServerUtAutoMonitoring/stepsForAchievingPlannedValues",
                            "name": "fy16Planned",
                            "title": "fy16Planned",
                            "description": "How the agency plans to reach their targets in the given optimization metric",
                            "type": "string",
                            "minLength": 200,
                            "maxLength": 10000
                        },
                        "explanationForUnmetPlannedValues": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/tieredServerUtAutoMonitoring/explanationForUnmetPlannedValue",
                            "name": "explanationForUnmetPlannedValues",
                            "title": "explanationForUnmetPlannedValue",
                            "description": "Explanation for an unmet target in the given optimization metric",
                            "type": "string",
                            "minLength": 0,
                            "maxLength": 10000
                        }
                    }
                },
                "nontieredServerUtAutoMonitoring": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/nontieredServerUtAutoMonitoring",
                    "name": "nontieredServerUtAutoMonitoring",
                    "description": "Targets for a given agency for each fiscal year in the nontiered server utilization and automated monitoring optimization metric",
                    "title": "nontieredServerUtAutoMonitoring",
                    "type": "object",
                    "required": [
                        "fy16Planned", "fy16Achieved", "fy17Planned", "fy17Achieved", "fy18Planned", "fy18Achieved",
                        "stepsForAchievingPlannedValues"
                    ],
                    "properties": {
                        "fy18OMBtarget": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/nontieredServerUtAutoMonitoring/fy18OMBTarget",
                            "name": "fy18OMBtarget",
                            "title": "fy18OMBTarget",
                            "description": "Value agency must reach by the end of fy 2018 in the given optimization metric",
                            "type": "number",
                            "minimum": 65.00,
                            "maximum": 65.00
                        },
                        "fy16Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/nontieredServerUtAutoMonitoring/fy16Planned",
                            "name": "fy16Planned",
                            "title": "fy16Planned",
                            "description": "Value agency plans to reach by the end of FY 16 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy16Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/nontieredServerUtAutoMonitoring/fy16Achieved",
                            "name": "fy16Achieved",
                            "title": "fy16Achieved",
                            "description": "Value agency achieved by the end of FY 16 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy17Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/nontieredServerUtAutoMonitoring/fy17Planned",
                            "name": "fy17Planned",
                            "title": "fy17Planned",
                            "description": "Value agency plans to reach by the end of FY 17 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy17Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/nontieredServerUtAutoMonitoring/fy17Achieved",
                            "name": "fy17Achieved",
                            "title": "fy17Achieved",
                            "description": "Value agency achieved by the end of FY 17 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy18Planned": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/nontieredServerUtAutoMonitoring/fy18Planned",
                            "name": "fy18Planned",
                            "title": "fy18Planned",
                            "description": "Value agency plans to achieve by the end of FY 18 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "fy18Achieved": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/nontieredServerUtAutoMonitoring/fy18Achieved",
                            "name": "fy18Achieved",
                            "title": "fy18Achieved",
                            "description": "Value agency achieved by the end of FY 18 in the given optimization metric",
                            "type": "number",
                            "minimum": 0,
                            "maximum": 100.00
                        },
                        "stepsForAchievingPlannedValues": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/nontieredServerUtAutoMonitoring/stepsForAchievingPlannedValues",
                            "name": "fy16Planned",
                            "title": "fy16Planned",
                            "description": "How the agency plans to reach their targets in the given optimization metric",
                            "type": "string",
                            "minLength": 200,
                            "maxLength": 10000
                        },
                        "explanationForUnmetPlannedValues": {
                            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/nontieredServerUtAutoMonitoring/explanationForUnmetPlannedValue",
                            "name": "explanationForUnmetPlannedValues",
                            "title": "explanationForUnmetPlannedValue",
                            "description": "Explanation for an unmet target in the given optimization metric",
                            "type": "string",
                            "minLength": 0,
                            "maxLength": 10000
                        }
                    }
                }
            }
        },
        "tieredClosures": {
            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/tieredClosures",
            "name": "tieredClosures",
            "title": "tieredClosures",
            "description": "The set of DCOI targets for closures of tiered data centers",
            "type": "object",
            "required": [
                "fy16Planned", "fy16Achieved", "fy17Planned", "fy17Achieved", "fy18Planned", "fy18Achieved",
                "stepsForAchievingPlannedValues"],
            "properties": {
                "fy18OMBtarget": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/tieredClosures/fy18OMBTarget",
                    "name": "fy18OMBtarget",
                    "title": "fy18OMBTarget",
                    "description": "Value agency must reach by the end of fy 2018 in total tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1000,
                    "multipleOf": 1
                },
                "fy16Planned": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/tieredClosures/fy16Planned",
                    "name": "fy16Planned",
                    "title": "fy16Planned",
                    "description": "Value agency plans to reach by the end of FY 16 in total tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1000,
                    "multipleOf": 1
                },
                "fy16Achieved": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/tieredClosures/fy16Achieved",
                    "name": "fy16Achieved",
                    "title": "fy16Achieved",
                    "description": "Value agency achieved by the end of FY 16 in total tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1000,
                    "multipleOf": 1
                },
                "fy17Planned": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/tieredClosures/fy17Planned",
                    "name": "fy17Planned",
                    "title": "fy17Planned",
                    "description": "Value agency plans to reach by the end of FY 17 in total tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1000,
                    "multipleOf": 1
                },
                "fy17Achieved": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/tieredClosures/fy17Achieved",
                    "name": "fy17Achieved",
                    "title": "fy17Achieved",
                    "description": "Value agency achieved by the end of FY 17 in total tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1000,
                    "multipleOf": 1
                },
                "fy18Planned": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/tieredClosures/fy18Planned",
                    "name": "fy18Planned",
                    "title": "fy18Planned",
                    "description": "Value agency plans to achieve by the end of FY 18 in total tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1000,
                    "multipleOf": 1
                },
                "fy18Achieved": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/tieredClosures/fy18Achieved",
                    "name": "fy18Achieved",
                    "title": "fy18Achieved",
                    "description": "Value agency achieved by the end of FY 18 in total tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1000,
                    "multipleOf": 1
                },
                "stepsForAchievingPlannedValues": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/tieredClosures/stepsForAchievingPlannedValues",
                    "name": "fy16Planned",
                    "title": "fy16Planned",
                    "description": "How the agency plans to reach their targets in total tiered closures",
                    "type": "string",
                    "minLength": 700,
                    "maxLength": 10000
                },
                "explanationForUnmetPlannedValues": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/tieredClosures/explanationForUnmetPlannedValue",
                    "name": "explanationForUnmetPlannedValues",
                    "title": "explanationForUnmetPlannedValue",
                    "description": "Explanation for an unmet target in total tiered closures",
                    "type": "string",
                    "minLength": 0,
                    "maxLength": 10000
                }
            }
        },
        "nontieredClosures": {
            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/nontieredClosures",
            "name": "nontieredClosures",
            "title": "nontieredClosures",
            "description": "The set of DCOI targets for closures of non-tiered data centers",
            "type": "object",
            "required": [
                "fy16Planned", "fy16Achieved", "fy17Planned", "fy17Achieved", "fy18Planned", "fy18Achieved",
                "stepsForAchievingPlannedValues"
            ],
            "properties": {
                "fy18OMBtarget": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/nontieredClosures/fy18OMBTarget",
                    "name": "fy18OMBtarget",
                    "title": "fy18OMBTarget",
                    "description": "Value agency must reach by the end of fy 2018 in total non-tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 3000,
                    "multipleOf": 1
                },
                "fy16Planned": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/nontieredClosures/fy16Planned",
                    "name": "fy16Planned",
                    "title": "fy16Planned",
                    "description": "Value agency plans to reach by the end of FY 16 in total non-tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 3000,
                    "multipleOf": 1
                },
                "fy16Achieved": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/nontieredClosures/fy16Achieved",
                    "name": "fy16Achieved",
                    "title": "fy16Achieved",
                    "description": "Value agency achieved by the end of FY 16 in total non-tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 3000,
                    "multipleOf": 1
                },
                "fy17Planned": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/nontieredClosures/fy17Planned",
                    "name": "fy17Planned",
                    "title": "fy17Planned",
                    "description": "Value agency plans to reach by the end of FY 17 in total non-tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 3000,
                    "multipleOf": 1
                },
                "fy17Achieved": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/nontieredClosures/fy17Achieved",
                    "name": "fy17Achieved",
                    "title": "fy17Achieved",
                    "description": "Value agency achieved by the end of FY 17 in total non-tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 3000,
                    "multipleOf": 1
                },
                "fy18Planned": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/nontieredClosures/fy18Planned",
                    "name": "fy18Planned",
                    "title": "fy18Planned",
                    "description": "Value agency plans to achieve by the end of FY 18 in total non-tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 3000,
                    "multipleOf": 1
                },
                "fy18Achieved": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/nontieredClosures/fy18Achieved",
                    "name": "fy18Achieved",
                    "title": "fy18Achieved",
                    "description": "Value agency achieved by the end of FY 18 in total non-tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 3000,
                    "multipleOf": 1
                },
                "stepsForAchievingPlannedValues": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/nontieredClosures/stepsForAchievingPlannedValues",
                    "name": "fy16Planned",
                    "title": "fy16Planned",
                    "description": "How the agency plans to reach their targets in total non-tiered closures",
                    "type": "string",
                    "minLength": 700,
                    "maxLength": 10000
                },
                "explanationForUnmetPlannedValues": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/nontieredClosures/explanationForUnmetPlannedValue",
                    "name": "explanationForUnmetPlannedValues",
                    "title": "explanationForUnmetPlannedValue",
                    "description": "Explanation for an unmet target in total non-tiered closures",
                    "type": "string",
                    "minLength": 0,
                    "maxLength": 10000
                }
            }
        },
        "costSavings": {
            "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/costSavings",
            "name": "costSavings",
            "title": "costSavings",
            "description": "The DCOI targets for cost savings from data centers",
            "type": "object",
            "required": [
                "fy16Planned", "fy16Achieved", "fy17Planned", "fy17Achieved", "fy18Planned", "fy18Achieved",
                "stepsForAchievingPlannedValues",
                "costsOfClosures",
                "costsOfOptimization",
                "lifecycleCostSavingsEstimated"
            ],
            "properties": {
                "fy18OMBtarget": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/costSavings/fy18OMBTarget",
                    "name": "fy18OMBtarget",
                    "title": "fy18OMBTarget",
                    "description": "Value agency must reach by the end of fy 2018 in cost savings from data centers",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 40000
                },
                "fy16Planned": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/costSavings/fy16Planned",
                    "name": "fy16Planned",
                    "title": "fy16Planned",
                    "description": "Value agency plans to reach by the end of FY 16 in cost savings from data centers",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 40000
                },
                "fy16Achieved": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/costSavings/fy16Achieved",
                    "name": "fy16Achieved",
                    "title": "fy16Achieved",
                    "description": "Value agency achieved by the end of FY 16 in cost savings from data centers",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 40000
                },
                "fy17Planned": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/costSavings/fy17Planned",
                    "name": "fy17Planned",
                    "title": "fy17Planned",
                    "description": "Value agency plans to reach by the end of FY 17 in cost savings from data centers",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 40000
                },
                "fy17Achieved": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/costSavings/fy17Achieved",
                    "name": "fy17Achieved",
                    "title": "fy17Achieved",
                    "description": "Value agency achieved by the end of FY 17 in cost savings from data centers",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 40000
                },
                "fy18Planned": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/costSavings/fy18Planned",
                    "name": "fy18Planned",
                    "title": "fy18Planned",
                    "description": "Value agency plans to achieve by the end of FY 18 in total tiered closures",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 40000
                },
                "fy18Achieved": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/costSavings/fy18Achieved",
                    "name": "fy18Achieved",
                    "title": "fy18Achieved",
                    "description": "Value agency achieved by the end of FY 18 in cost savings from data centers",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 40000
                },
                "stepsForAchievingPlannedValues": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/tieredServerUtAutoMonitoring/stepsForAchievingPlannedValues",
                    "name": "fy16Planned",
                    "title": "fy16Planned",
                    "description": "How the agency plans to reach their targets in the given optimization metric",
                    "type": "string",
                    "minLength": 200,
                    "maxLength": 10000
                },
                "explanationForUnmetPlannedValues": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/optimizationMetrics/tieredServerUtAutoMonitoring/explanationForUnmetPlannedValue",
                    "name": "explanationForUnmetPlannedValues",
                    "title": "explanationForUnmetPlannedValue",
                    "description": "Explanation for an unmet target in the given optimization metric",
                    "type": "string",
                    "minLength": 0,
                    "maxLength": 10000
                },
                "costsOfClosures": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/costSavings/costsOfClosures",
                    "name": "costsOfClosures",
                    "title": "costsOfClosures",
                    "description": "Explanation of the costs involved or incurred by the agency to close data centers",
                    "type": "string",
                    "minLength": 5,
                    "maxLength": 10000
                },
                "costsOfOptimization": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/costSavings/costsOfOptimization",
                    "name": "costsOfOptimization",
                    "title": "costsOfOptimization",
                    "description": "Explanation of the costs involved or incurred in the process of optimizing data centers",
                    "type": "string",
                    "minLength": 5,
                    "maxLength": 10000
                },
                "lifecycleCostSavingsEstimated": {
                    "id": "https://omb.max.gov/schemas/DCOIStrategicPlans/costSavings/lifecycleCostSavingsEstimated",
                    "name": "lifecycleCostSavingsEstimated",
                    "title": "lifecycleCostSavingsEstimated",
                    "description": "Explanation of the lifecycle costs the agency expects for data centers",
                    "type": "string",
                    "minLength": 5,
                    "maxLength": 10000
                }
            }
        }
    }
};

module.exports = schema;