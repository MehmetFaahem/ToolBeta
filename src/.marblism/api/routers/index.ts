/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createToolRouter from "./Tool.router";
import createDownloadRouter from "./Download.router";
import createHashtagSetRouter from "./HashtagSet.router";
import createHashtagCombinationRouter from "./HashtagCombination.router";
import createRecentActivityRouter from "./RecentActivity.router";
import createUserRouter from "./User.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import { ClientType as ToolClientType } from "./Tool.router";
import { ClientType as DownloadClientType } from "./Download.router";
import { ClientType as HashtagSetClientType } from "./HashtagSet.router";
import { ClientType as HashtagCombinationClientType } from "./HashtagCombination.router";
import { ClientType as RecentActivityClientType } from "./RecentActivity.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        tool: createToolRouter(router, procedure),
        download: createDownloadRouter(router, procedure),
        hashtagSet: createHashtagSetRouter(router, procedure),
        hashtagCombination: createHashtagCombinationRouter(router, procedure),
        recentActivity: createRecentActivityRouter(router, procedure),
        user: createUserRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    tool: ToolClientType<AppRouter>;
    download: DownloadClientType<AppRouter>;
    hashtagSet: HashtagSetClientType<AppRouter>;
    hashtagCombination: HashtagCombinationClientType<AppRouter>;
    recentActivity: RecentActivityClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
