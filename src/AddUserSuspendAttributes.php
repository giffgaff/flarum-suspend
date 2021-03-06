<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Suspend;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\Formatter\Formatter;
use Flarum\User\User;

class AddUserSuspendAttributes
{
    /**
     * @var Formatter
     */
    protected $formatter;

    public function __construct(Formatter $formatter)
    {
        $this->formatter = $formatter;
    }

    public function __invoke(UserSerializer $serializer, User $user)
    {
        $attributes = [];
        $canSuspend = $serializer->getActor()->can('suspend', $user);
        $isCurrentUser = $serializer->getActor()->id === $user->id;

        if ($canSuspend) {
            $attributes['suspendedUntil'] = $serializer->formatDate($user->suspended_until);
            $attributes['suspendMessage'] = $user->suspend_message;
            $attributes['suspendMessageRaw'] = $this->formatter->unparse($user->suspend_message);
            $attributes['suspendReason'] = $user->suspend_reason;
            $attributes['suspendReasonRaw'] = $this->formatter->unparse($user->suspend_reason);
        }

        if ($isCurrentUser || $canSuspend) {
            if (! empty($user->suspend_message)) {
                $attributes['suspendMessage'] = $user->suspend_message;
            }
            $attributes['suspendedUntil'] = $serializer->formatDate($user->suspended_until);
        }

        $attributes['canSuspend'] = $canSuspend;

        return $attributes;
    }
}
