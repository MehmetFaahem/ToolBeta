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

        createMany: procedure.input($Schema.HashtagCombinationInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hashtagCombination.createMany(input as any))),

        create: procedure.input($Schema.HashtagCombinationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hashtagCombination.create(input as any))),

        deleteMany: procedure.input($Schema.HashtagCombinationInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hashtagCombination.deleteMany(input as any))),

        delete: procedure.input($Schema.HashtagCombinationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hashtagCombination.delete(input as any))),

        findFirst: procedure.input($Schema.HashtagCombinationInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).hashtagCombination.findFirst(input as any))),

        findMany: procedure.input($Schema.HashtagCombinationInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).hashtagCombination.findMany(input as any))),

        findUnique: procedure.input($Schema.HashtagCombinationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).hashtagCombination.findUnique(input as any))),

        updateMany: procedure.input($Schema.HashtagCombinationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hashtagCombination.updateMany(input as any))),

        update: procedure.input($Schema.HashtagCombinationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hashtagCombination.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.HashtagCombinationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HashtagCombinationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HashtagCombinationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HashtagCombinationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.HashtagCombinationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HashtagCombinationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HashtagCombinationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HashtagCombinationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HashtagCombinationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HashtagCombinationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HashtagCombinationGetPayload<T>, Context>) => Promise<Prisma.HashtagCombinationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.HashtagCombinationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HashtagCombinationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HashtagCombinationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HashtagCombinationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.HashtagCombinationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HashtagCombinationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HashtagCombinationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HashtagCombinationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HashtagCombinationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HashtagCombinationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HashtagCombinationGetPayload<T>, Context>) => Promise<Prisma.HashtagCombinationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.HashtagCombinationFindFirstArgs, TData = Prisma.HashtagCombinationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HashtagCombinationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HashtagCombinationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HashtagCombinationFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HashtagCombinationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HashtagCombinationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HashtagCombinationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.HashtagCombinationFindManyArgs, TData = Array<Prisma.HashtagCombinationGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.HashtagCombinationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.HashtagCombinationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HashtagCombinationFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HashtagCombinationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.HashtagCombinationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.HashtagCombinationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.HashtagCombinationFindUniqueArgs, TData = Prisma.HashtagCombinationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HashtagCombinationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HashtagCombinationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HashtagCombinationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HashtagCombinationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HashtagCombinationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HashtagCombinationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.HashtagCombinationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HashtagCombinationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HashtagCombinationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HashtagCombinationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.HashtagCombinationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HashtagCombinationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HashtagCombinationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HashtagCombinationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HashtagCombinationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HashtagCombinationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HashtagCombinationGetPayload<T>, Context>) => Promise<Prisma.HashtagCombinationGetPayload<T>>
            };

    };
}
