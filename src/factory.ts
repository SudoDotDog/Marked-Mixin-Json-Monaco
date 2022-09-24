/**
 * @author WMXPY
 * @namespace MarkedMixinJsonMonaco
 * @description Factory
 */

import { MarkedMonacoExportsMixinFactory } from "@sudoo/marked-monaco-mixin";
import { MarkedJsonMixinDeclaration } from "./declaration";

export const markedJsonMonacoMixinFactory =
    MarkedMonacoExportsMixinFactory.fromExports(
        "marked-mixin-json",
        MarkedJsonMixinDeclaration,
    );
