"use strict";
/**
 * @license
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
var body_pix_model_1 = require("./body_pix_model");
__createBinding(exports, body_pix_model_1, "BodyPix");
__createBinding(exports, body_pix_model_1, "load");
var output_rendering_util_1 = require("./output_rendering_util");
__createBinding(exports, output_rendering_util_1, "blurBodyPart");
__createBinding(exports, output_rendering_util_1, "drawBokehEffect");
__createBinding(exports, output_rendering_util_1, "drawMask");
__createBinding(exports, output_rendering_util_1, "drawPixelatedMask");
__createBinding(exports, output_rendering_util_1, "toColoredPartMask");
__createBinding(exports, output_rendering_util_1, "toMask");
var part_channels_1 = require("./part_channels");
__createBinding(exports, part_channels_1, "PART_CHANNELS");
var util_1 = require("./util");
__createBinding(exports, util_1, "flipPoseHorizontal");
__createBinding(exports, util_1, "resizeAndPadTo");
__createBinding(exports, util_1, "scaleAndCropToInputTensorShape");
var version_1 = require("./version");
__createBinding(exports, version_1, "version");
