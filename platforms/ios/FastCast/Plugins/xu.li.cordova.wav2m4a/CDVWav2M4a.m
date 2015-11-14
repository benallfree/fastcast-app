//
//  CDVWav2M4a.m
//
//  Created by xu.li on 12/19/13.
//
//

#import "CDVWav2M4a.h"


@implementation CDVWav2M4a

- (void)convert:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    
    
    NSURL *src = [NSURL URLWithString:[command.arguments objectAtIndex:0]];

    NSURL *target = [NSURL URLWithString:[command.arguments objectAtIndex:1]];
    
    // check target file
    if (!target)
    {
        target = [NSURL fileURLWithPath: [[[src absoluteString] stringByDeletingPathExtension] stringByAppendingPathExtension:@"m4a"]
                  isDirectory:NO];
    }

    NSError *err;
    if ([src checkResourceIsReachableAndReturnError:&err] == NO) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Source file doesn't exist."];
        
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        return ;
    }
    else
    {
        AVURLAsset* audioAsset = [[AVURLAsset alloc] initWithURL:src options:nil];
        AVAssetExportSession *session = [[AVAssetExportSession alloc] initWithAsset:audioAsset presetName:AVAssetExportPresetAppleM4A];
        session.outputURL = target;
        session.outputFileType = AVFileTypeAppleM4A;
        
        [session exportAsynchronouslyWithCompletionHandler:^{
            CDVPluginResult* pluginResult = nil;
            
            if (session.status == AVAssetExportSessionStatusCompleted)
            {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
            }
            else
            {
                NSString *msg = [session.error localizedDescription];
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:msg];
            }
            
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }
}


@end
