/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.RecentActivityInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recentActivity.createMany(input as any))),

        create: procedure.input($Schema.RecentActivityInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recentActivity.create(input as any))),

        deleteMany: procedure.input($Schema.RecentActivityInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recentActivity.deleteMany(input as any))),

        delete: procedure.input($Schema.RecentActivityInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recentActivity.delete(input as any))),

        findFirst: procedure.input($Schema.RecentActivityInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).recentActivity.findFirst(input as any))),

        findMany: procedure.input($Schema.RecentActivityInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).recentActivity.findMany(input as any))),

        findUnique: procedure.input($Schema.RecentActivityInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).recentActivity.findUnique(input as any))),

        updateMany: procedure.input($Schema.RecentActivityInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recentActivity.updateMany(input as any))),

        update: procedure.input($Schema.RecentActivityInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recentActivity.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.RecentActivityCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecentActivityCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecentActivityCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecentActivityCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.RecentActivityCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecentActivityCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RecentActivityGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RecentActivityGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecentActivityCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecentActivityCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RecentActivityGetPayload<T>, Context>) => Promise<Prisma.RecentActivityGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.RecentActivityDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecentActivityDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecentActivityDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecentActivityDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.RecentActivityDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecentActivityDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RecentActivityGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RecentActivityGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecentActivityDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecentActivityDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RecentActivityGetPayload<T>, Context>) => Promise<Prisma.RecentActivityGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.RecentActivityFindFirstArgs, TData = Prisma.RecentActivityGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RecentActivityFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RecentActivityGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RecentActivityFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecentActivityFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RecentActivityGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RecentActivityGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.RecentActivityFindManyArgs, TData = Array<Prisma.RecentActivityGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.RecentActivityFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.RecentActivityGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RecentActivityFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecentActivityFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RecentActivityGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.RecentActivityGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.RecentActivityFindUniqueArgs, TData = Prisma.RecentActivityGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RecentActivityFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RecentActivityGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RecentActivityFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecentActivityFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RecentActivityGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RecentActivityGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.RecentActivityUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecentActivityUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecentActivityUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecentActivityUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.RecentActivityUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecentActivityUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RecentActivityGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RecentActivityGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecentActivityUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecentActivityUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RecentActivityGetPayload<T>, Context>) => Promise<Prisma.RecentActivityGetPayload<T>>
            };

    };
}
